// __tests__/SearchBar.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from '../search-bar';

describe('SearchBar Component', () => {
  // Mock functions
  const mockOnSearchByChange = jest.fn();
  const mockOnSearchChange = jest.fn();
  const mockOnSortByChange = jest.fn();
  const mockHandleFilterDialogOpen = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks(); // Clear any previous mock calls
  });

  test('renders correctly with given props', () => {
    render(
      <SearchBar
        searchBy="all"
        onSearchByChange={mockOnSearchByChange}
        search="test"
        onSearchChange={mockOnSearchChange}
        sortBy="createdAt"
        onSortByChange={mockOnSortByChange}
        fromDate={''}
        toDate={''}
      />
    );

    // Check if all elements are rendered
    expect(screen.getByText('Search By')).toBeInTheDocument();
    expect(screen.getByText('Sort By')).toBeInTheDocument();
    expect(screen.getByText('Filters')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search Sites')).toBeInTheDocument();
  });

  test('calls onSearchByChange when Search By dropdown changes', async () => {
    render(
      <SearchBar
        searchBy="all"
        onSearchByChange={mockOnSearchByChange}
        search="test"
        onSearchChange={mockOnSearchChange}
        sortBy="createdAt"
        onSortByChange={mockOnSortByChange}
        fromDate={''}
        toDate={''}
      />
    );

    // Find the Select element by test ID
    const searchBySelect = screen.getByText('All');

    fireEvent.mouseDown(searchBySelect);

    const titleOption = screen.getByText('Title');
    fireEvent.click(titleOption);

    expect(mockOnSearchByChange).toHaveBeenCalled();
  });

  test('calls onSortByChange when Sort By dropdown changes', () => {
    render(
      <SearchBar
        searchBy="all"
        onSearchByChange={mockOnSearchByChange}
        search="test"
        onSearchChange={mockOnSearchChange}
        sortBy="createdAt"
        onSortByChange={mockOnSortByChange}
        fromDate={''}
        toDate={''}
      />
    );

    // Find the Select element by test ID
    const sortBySelect = screen.getByText('Created At');

    fireEvent.mouseDown(sortBySelect);

    const updatedAtOption = screen.getByText('Updated At');
    fireEvent.click(updatedAtOption);

    expect(mockOnSortByChange).toHaveBeenCalled();
  });

  test('calls onSearchChange when search input changes', () => {
    render(
      <SearchBar
        searchBy="all"
        onSearchByChange={mockOnSearchByChange}
        search="test"
        onSearchChange={mockOnSearchChange}
        sortBy="createdAt"
        onSortByChange={mockOnSortByChange}
        fromDate={''}
        toDate={''}
      />
    );

    fireEvent.change(screen.getByPlaceholderText('Search Sites'), {
      target: {
        value: 'new search',
      } as unknown as React.ChangeEvent<HTMLInputElement>,
    });

    expect(mockOnSearchChange).toHaveBeenCalled();
  });
});
