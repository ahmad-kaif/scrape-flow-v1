// next.d.ts
import type { 
    ReadonlyURLSearchParams 
  } from 'next/navigation';
  
  declare module 'next' {
    export interface PageProps {
      params?: Record<string, string | string[]>;
      searchParams?: Record<string, string | string[] | ReadonlyURLSearchParams>;
    }
  }
  
  export {};