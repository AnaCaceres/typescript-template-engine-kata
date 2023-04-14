import { templateEngine } from "../src/TemplateEngine";

describe("Template Engine", () => {
  it("should replace variable with corresponding value", () => {
    const template = 'This is a template with one ${variable}';
    const values = { variable: "foo" };

    expect(templateEngine(template, values)).toBe('This is a template with one foo');
  });
});
