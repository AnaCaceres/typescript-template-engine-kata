function templateEngine(template: string, values: {[key: string]: string}) {
  let transformTemplate = template;

  for (const valueKey in values) {
    transformTemplate = transformTemplate.replaceAll('${'+ `${valueKey}` + '}', values[valueKey]);
  }

  return transformTemplate;
}

export { templateEngine };