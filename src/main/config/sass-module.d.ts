declare module '*sass' {
  // entender as extenções do scss como classes
  const content: { [className: string]: string }
  export = content
}
