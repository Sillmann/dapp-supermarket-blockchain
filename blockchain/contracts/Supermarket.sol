// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

contract Supermarket {

    string public message = "Hello Supermarket";

    function setMessage(string memory NewMessage) public {
        message = NewMessage;
    }

    // Main structure
    // Ex: supermarket list
    // supermarket list
    // name:banana     brand:organic
    // name:soft drink brand:coca cola
    // name:rice       brand:brazil-rice  
    struct List {
        string name;
        string brand;
    }

    // Items Control
    uint private nextId = 0;

    // Ex: supermarket list
    // 1-[name:banana     brand:organic]
    // 2-[name:soft drink brand:coca cola]
    // 3-[name:rice       brand:brazil-rice]   
    mapping(uint => List) public items;

    // Ex: supermarket list
    // 3
    uint public totalItems;

    function addItem(List memory newItem) public {
        nextId++;
        items[totalItems] = newItem;
        totalItems++;
    }
    
}
