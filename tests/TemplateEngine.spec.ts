describe("Template Engine", () => {
  it("should replace variable with corresponding value", () => {
    const template = `This is a template with one ${variable}`;
    const values = { variable: "foo" };

    expect(templateEngine(template, value)).toBe('This template with one foo');
  });
});
