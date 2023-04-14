function templateEngine(template: string, values: {variable: string}) {
    const value = values.variable;
  return `This template with one ${value}`;
}

export { templateEngine };