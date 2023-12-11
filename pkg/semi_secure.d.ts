/* tslint:disable */
/* eslint-disable */
/**
*/
export function main(): void;
/**
* @param {string} solution
* @returns {string}
*/
export function gen_problem(solution: string): string;
/**
* @param {string} solution
* @param {string} problem_id
* @param {string} user_id
* @returns {string | undefined}
*/
export function gen_code(solution: string, problem_id: string, user_id: string): string | undefined;
/**
* @param {string} code
* @param {string} problem_id
* @param {string} user_id
* @returns {boolean}
*/
export function ver_code(code: string, problem_id: string, user_id: string): boolean;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly main: () => void;
  readonly gen_problem: (a: number, b: number, c: number) => void;
  readonly gen_code: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly ver_code: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
