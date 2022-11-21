// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
it('test1', ()=>{
    expect(functions.isPhoneNumber("hahaha")).toBe(false);
    expect(functions.isPhoneNumber("asdf122id-ucsd")).toBe(false);
    expect(functions.isPhoneNumber("(858)-568-0018")).toBe(true);
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});

it('test2', ()=>{
    expect(functions.isEmail("hahaha")).toBe(false);
    expect(functions.isEmail("asdf122id@ucsd")).toBe(false);
    expect(functions.isEmail("xkan@ucsd.edu")).toBe(true);
    expect(functions.isEmail("xuechenkan@gmail.com")).toBe(true);
});

it('test3', ()=>{
    expect(functions.isDate("01/01/20222")).toBe(false);
    expect(functions.isDate("01/01/abcd")).toBe(false);
    expect(functions.isDate("01/01/2022")).toBe(true);
    expect(functions.isDate("30/30/2022")).toBe(true); //lmao
});

it('test4', ()=>{
    expect(functions.isStrongPassword("no")).toBe(false);
    expect(functions.isStrongPassword("thisisasupersuperlongpassword")).toBe(false);
    expect(functions.isStrongPassword("strongpassword")).toBe(true);
    expect(functions.isStrongPassword("cse110")).toBe(true);
});

it('test5', ()=>{
    expect(functions.isHexColor("GGGGGG")).toBe(false);
    expect(functions.isHexColor("hex")).toBe(false);
    expect(functions.isHexColor("000000")).toBe(true);
    expect(functions.isHexColor("000")).toBe(true);
});