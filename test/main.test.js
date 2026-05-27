import  generateDate from "../utils/moment.js";
import changeFormat from "../utils/change-format.js";
import { describe, it, mock, before, after, } from "node:test";
import assert from "node:assert";

describe(' Change format date using moment Test', function(){
  it("Input date should be valid date", function(){
    assert.throws(() => generateDate('test'));
  });

  it("Should return string", function(){
    assert.equal(typeof generateDate('22-12-2000'), 'string');
  });
});

describe(' Change format date manual Test', function(){
  it("Input date should be valid date", function(){
    assert.throws(() => changeFormat('test'), {message:'Manual: Format tanggal tidak sesuai'});
  });

  it("Should return string", function(){
    assert.equal(typeof changeFormat('22-12-2000'), 'string');
  });

  it('Should return indonesia date format', function () {
    const result = changeFormat('22-12-2000');
    assert.equal(result, '22/12/2000');
  });

  it('Should throw error if separator invalid', function () {
    assert.throws(() => changeFormat('22/12/2000'),{ message:`Manual: Format tanggal tidak boleh mengandung / ` }
    );
  });
});