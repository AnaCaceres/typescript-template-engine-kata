function templateEngine(template: string, values: {[key: string]: string | number}) {
  if (Object.keys(values).length === 0) {
    console.warn('No values to replace in template');
    return template;
  }

  let transformTemplate = template;

  for (const valueKey in values) {
    const value = values[valueKey].toString();
    transformTemplate = transformTemplate.replaceAll('${'+ `${valueKey}` + '}', value);
  }

  return transformTemplate;
}

export { templateEngine };