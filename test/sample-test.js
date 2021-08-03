const { assert } = require("chai");

describe("Thing", function () {
  it("Should return x and updated value of x", async function () {

    const x = 53;
    const Thing = await ethers.getContractFactory("Thing");
    const thing = await Thing.deploy(x);
    await thing.deployed();

    let actual = await thing.x();

    assert.equal(actual.toNumber(), 53);

    const y = 7;

    await thing.changeX(y);
    actual = await thing.x();
    assert.equal(y, actual);


  });
});
