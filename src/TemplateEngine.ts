function templateEngine(template: string, values: {[key: string]: string}) {
  const valueKey = Object.keys(values)[0];
  return template.replaceAll('${'+ `${valueKey}` + '}', values[valueKey]);
}

export { templateEngine };