function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function doesIncludeTerm(input: string, searchTerm: string): boolean {
  return new RegExp(escapeRegExp(searchTerm), "giu").test(input);
}
