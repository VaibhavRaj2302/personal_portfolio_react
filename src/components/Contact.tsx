/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent, useEffect } from "react";
import { Mail, MapPin, Terminal, Cpu, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  // Terminal execution simulation state
  const [isSending, setIsSending] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [showSuccessConsole, setShowSuccessConsole] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill all core variables (name, email, message_body) to execute compile_send.");
      return;
    }

    setIsSending(true);
    setConsoleLogs([]);
    setShowSuccessConsole(true);
  };

  useEffect(() => {
    if (!isSending) return;

    const logSequence = [
      `$ cd ~/portfolio/contact && npx ts-node send_message.ts`,
      `[INIT] Validating compiler configurations... READY`,
      `[PARSE] Name parameters verified: "${name}"`,
      `[PARSE] Endpoint verified: "vaibhavraj2316@gmail.com"`,
      `[NET] Opening secured websocket routing tunnel... CONNECTED`,
      `[PACK] Gzipping payload bytes... size: ${Math.floor(message.length * 1.2)}B`,
      `[TRANSMIT] Dispatching email packets to destination server...`,
      `[200 OK] Message successfully delivered to developer.`
    ];

    let currentLogIndex = 0;
    const interval = setInterval(() => {
      if (currentLogIndex < logSequence.length) {
        setConsoleLogs((prev) => [...prev, logSequence[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        setIsSending(false);
        // Clean fields on success
        setName("");
        setEmail("");
        setMessage("");
      }
    }, 450);

    return () => clearInterval(interval);
  }, [isSending]);

  const handleClearLogs = () => {
    setShowSuccessConsole(false);
    setConsoleLogs([]);
  };

  return (
    <section className="ide-border-t transition-colors duration-300" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Info Column */}
        <div className="p-6 md:p-12 ide-border-r bg-ide-surface-lowest transition-colors duration-300 text-left">
          <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-ide-text mb-6">
            Let's build something efficient.
          </h2>
          <p className="font-sans text-base text-ide-text-variant mb-10 leading-relaxed max-w-md">
            Open for freelance opportunities and full-stack collaborations. Feel free to contact me directly about custom features or performance optimizations.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <Mail className="text-ide-primary h-5 w-5 transition-transform group-hover:scale-110" />
              <span className="font-mono text-base text-ide-text font-bold select-all">
                vaibhavraj2316@gmail.com
              </span>
            </div>
            
            <div className="flex items-center gap-4 group">
              <MapPin className="text-ide-primary h-5 w-5 transition-transform group-hover:scale-110" />
              <span className="font-mono text-base text-ide-text font-bold">
                Remote / Global
              </span>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="p-6 md:p-12 bg-ide-bg transition-colors duration-300 relative">
          {!showSuccessConsole ? (
            <form onSubmit={handleSubmit} className="space-y-6 text-left" id="contact-form">
              <div>
                <label className="block font-mono text-[11px] text-ide-text-variant mb-2 font-bold tracking-wider">
                  SENDER_NAME
                </label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-ide-bg border border-ide-border px-4 py-3 text-ide-text focus:border-ide-primary focus:ring-0 rounded-none transition-colors font-sans text-sm focus:outline-none"
                  placeholder="John Doe"
                  required
                  id="form-sender-name"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] text-ide-text-variant mb-2 font-bold tracking-wider">
                  EMAIL_ADDRESS
                </label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-ide-bg border border-ide-border px-4 py-3 text-ide-text focus:border-ide-primary focus:ring-0 rounded-none transition-colors font-sans text-sm focus:outline-none"
                  placeholder="john@example.com"
                  required
                  id="form-sender-email"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] text-ide-text-variant mb-2 font-bold tracking-wider">
                  MESSAGE_BODY
                </label>
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-ide-bg border border-ide-border px-4 py-3 text-ide-text focus:border-ide-primary focus:ring-0 rounded-none transition-colors font-sans text-sm pb-10 focus:outline-none"
                  placeholder="Hello, I have a project..."
                  rows={4}
                  required
                  id="form-message-body"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-[#8B5CF6] text-white font-mono text-[12px] font-bold py-4 hover:bg-[#7c3aed] hover:text-white transition-all duration-300 tracking-wider rounded-none"
                id="btn-execute-send"
              >
                EXECUTE_SEND
              </button>
            </form>
          ) : (
            /* Immersive Terminal Output Log Screen */
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-ide-surface-lowest border border-ide-border-active p-5 flex flex-col h-full rounded-none tracking-tight text-left min-h-[352px]"
              id="terminal-output-panel"
            >
              <div className="flex justify-between items-center pb-3 border-b border-ide-border mb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-ide-secondary animate-pulse" />
                  <span className="font-mono text-xs font-bold text-ide-text-variant">
                    console_send_log
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                </div>
              </div>

              {/* Log stream output rows */}
              <div className="flex-grow font-mono text-xs overflow-y-auto bg-ide-surface-low border border-ide-border p-4 space-y-2 h-44 text-left font-medium select-text">
                {consoleLogs.map((log, index) => (
                  <p 
                    key={index} 
                    className={`${log.startsWith("$") ? "text-ide-primary font-bold" : log.startsWith("[200") ? "text-emerald-500 font-bold" : "text-ide-text-variant"}`}
                  >
                    {log}
                  </p>
                ))}
                {isSending && (
                  <p className="text-ide-secondary font-bold animate-pulse terminal-blink">
                    [WAIT] Streaming socket stream
                  </p>
                )}
              </div>

              {/* Finish Actions */}
              {!isSending && (
                <div className="mt-4 pt-4 border-t border-ide-border flex flex-col sm:flex-row gap-3">
                  <div className="flex items-center gap-1.5 text-emerald-500 font-mono text-xs">
                    <CheckCircle className="h-4 w-4 shrink-0" />
                    <span>COMPILE_SUCCESS: Message delivered securely</span>
                  </div>
                  <button
                    onClick={handleClearLogs}
                    className="ml-auto bg-ide-primary-btn hover:brightness-115 text-white font-mono text-[11px] px-4 py-2 rounded-none transition-all duration-300"
                    id="btn-new-message"
                  >
                    SEND_NEW_PAYLOAD
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
