/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  details?: string[];
  tech: string[];
  image: string;
  alt: string;
  status?: string;
  links?: LinkObject | undefined;
  metrics?: String[] | undefined;
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
  bullets: string[];
}

export interface Metric {
  value: string;
  label: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export interface LinkObject {
  appStoreUrl: null; // TODO: add if public
  repoUrl: null; // TODO: add if shareable, else leave null
  caseStudyUrl: null;
  private: true; // set false once you decide what's shareable
}
