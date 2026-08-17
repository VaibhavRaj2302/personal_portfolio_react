import {
  DataSnapshot,
  onValue,
  push,
  ref,
  serverTimestamp,
} from "firebase/database";
import { database } from "../utils/Firebase_RTDB";
import { Queries } from "../models/QueryModel";

export const saveUserQuery = async ({
  queryData,
}: {
  queryData: Queries;
}): Promise<{ message: string }> => {
  const queriesRef = ref(database, "queries");
  try {
    await push(queriesRef, {
      ...queryData,
      createdAt: serverTimestamp(),
    });
    return {
      message:
        "I will reach out to you soon! Your query has been registered with me.",
    };
  } catch (error: unknown) {
    const message =
      typeof error === "object" && error !== null && "message" in error
        ? String((error as { message?: unknown }).message)
        : "Unknown error occurred while saving query.";

    const code =
      typeof error === "object" && error !== null && "code" in error
        ? String((error as { code?: unknown }).code)
        : undefined;

    throw {
      message,
    };
  }
};

/**
 * Subscribes to the 'queries' node and invokes a callback with the data.
 * @param {Function} callback - Function called with the fetched data.
 * @param {Function} [onError] - Optional function called on error.
 * @returns {Function} Unsubscribe function to clean up the listener.
 */
export const subscribeToQueries = ({
  callback,
  onError,
}: {
  callback: (value: DataSnapshot | null) => void;
  onError: (error: Error) => void;
}) => {
  const dbRef = ref(database, "queries");

  // onValue returns an unsubscribe function automatically
  const unsubscribe = onValue(
    dbRef,
    (snapshot) => {
      if (snapshot.exists()) {
        callback(snapshot.val());
      } else {
        callback(null);
        console.log("No data available at this node.");
      }
    },
    (error) => {
      console.error("Error reading data:", error);
      if (onError) onError(error);
    },
  );

  return unsubscribe;
};
