// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Assessment {
    int256 public result;

    function multiply(int256 a, int256 b) public {
        result = a * b;
    }

    function divide(int256 a, int256 b) public {
        result = a / b;
    }

    function getResult() public view returns (int256) {
        return result;
    }
}
