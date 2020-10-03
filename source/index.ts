
export default function charToString(character: string | number) {
  return typeof character === "string" ? character.charAt(0) : String.fromCharCode(character);
}
