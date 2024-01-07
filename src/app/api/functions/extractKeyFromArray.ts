
//Exapmle: input: '/authors/OL34184A', output: 'OL34184A'

export default function extractKeyFromArray(str: string) {
  const parts = str.split('/');
  return parts[2];
}