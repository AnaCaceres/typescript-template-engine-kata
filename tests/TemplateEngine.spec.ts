import { templateEngine } from "../src/TemplateEngine";

describe("Template Engine", () => {
  it("should replace variable with corresponding value", () => {
    const template = 'This is a template with one ${variable}';
    const values = { variable: "foo" };

    expect(templateEngine(template, values)).toBe('This is a template with one foo');
  });
  it("should replace variable with corresponding value with different name", () => {
    const template = 'This is a template with other ${value}';
    const values = { value: "foo" };

    expect(templateEngine(template, values)).toBe('This is a template with other foo');
  });
});
