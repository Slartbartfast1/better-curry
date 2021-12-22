export const renderIf = (condition: boolean) => (res: any) => {
  if (condition) {
    return res
  }
}