const expect = require("expect");
//const {expect} = require('chai');
const { generateMessage } = require("./message");

describe("generateMessage", () => {
  it("should generate correct message object", () => {
    let from = "Jen";
    let text = "Some message";
    let message = generateMessage(from, text);
    //let messageType = typeof message.createdAt;
  
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({ from, text });
    
  });
});
