import React, { useState } from 'react';
import _debounce from 'lodash/debounce';
import { Input, Button } from 'antd';
const { Search } = Input;

const SearchInput = ({ onSearch }) => {

    const handleSearch = _debounce((searchTerm) => {
        onSearch(searchTerm);
    }, 300);
    return (
        <div style={{ marginBottom: '16px' }}>
            <Search
                placeholder="Search by title..."

                onChange={(e) => handleSearch(e.target.value)}

            />
        </div>
    );
}


export default SearchInput