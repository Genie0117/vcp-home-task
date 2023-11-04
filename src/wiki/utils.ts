export function removeHtmlTags(input: string): string {
  if (typeof input !== 'string') return '';
  const pattern = /<[^>]*>/g;

  return input.replace(pattern, '');
}
