/**
 * Text Parser
 * @returns an array of strings, each of them is designed to be a new paragraph
 */
export default (text) => {
  return text.split('\\n');
}