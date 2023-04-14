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
  it("should replace variables with all corresponding values", () => {
    const template = "This is a text with a ${variable} to be replaced. " +
    "And this is another text with ${other-variable} to be replaced. " +
    "And this is another text with ${another-variable} to be replaced.";

    const values = { variable: "value", "other-variable": "other-value", "another-variable": "another-value" };

    expect(templateEngine(template, values)).toBe("This is a text with a value to be replaced. " +
    "And this is another text with other-value to be replaced. " +
    "And this is another text with another-value to be replaced.");
  });
  it("should replace variables with all corresponding values with different types", () => {
    const template = "This is a text with a ${variable} to be replaced. " +
    "And this is another text with ${other-variable} to be replaced. " +
    "And this is another text with ${another-variable} to be replaced.";

    const values = { variable: "", "other-variable": 1, "another-variable": "another-value" };

    expect(templateEngine(template, values)).toBe("This is a text with a  to be replaced. " +
    "And this is another text with 1 to be replaced. " +
    "And this is another text with another-value to be replaced.");
  });
  it("should return the template if there are no values to replace", () => {
    const template = "This is a text with a ${variable} to be replaced. " +
    "And this is another text with ${other-variable} to be replaced. " +
    "And this is another text with ${another-variable} to be replaced.";

    const values = {};
    const spy = jest.spyOn(console, 'warn');

    expect(templateEngine(template, values)).toBe("This is a text with a ${variable} to be replaced. " +
    "And this is another text with ${other-variable} to be replaced. " +
    "And this is another text with ${another-variable} to be replaced.");
    expect(spy).toHaveBeenCalled();
  });
});
