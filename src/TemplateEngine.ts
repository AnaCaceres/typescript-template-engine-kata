function templateEngine(template: string, values: {variable: string}) {
  const value = values.variable;
  return template.replaceAll('${variable}', value);
}

export { templateEngine };