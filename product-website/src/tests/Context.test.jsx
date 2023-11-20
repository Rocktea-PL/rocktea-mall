/*import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { vi } from 'vitest';
import { AppProvider } from '../Hooks/Context';
import { Component } from 'react';

describe('MyContext', () => {
  it('should render without crashing', () => {
    const { getByText } = render(<AppProvider><Component /></AppProvider>);
    expect(getByText('Submit')).toBeInTheDocument();
  });

  it('should call handleUserForm when form submitted', async () => {
    const handleUserFormSpy = vi.fn();
    const { getByText } = render(<AppProvider><Component handleUserForm={handleUserFormSpy} /></AppProvider>);
    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);
    expect(handleUserFormSpy).toHaveBeenCalled();
  });

  it('should call updateProfile when profile updated', async () => {
    const updateProfileSpy = vi.fn();
    const { getByLabelText } = render(<AppProvider><Component updateProfile={updateProfileSpy} /></AppProvider>);
    const profileImageInput = getByLabelText('Profile Image');
    const file = new File([''], 'profile-picture.jpg', { type: 'image/jpeg' });
    fireEvent.change(profileImageInput, { target: { files: [file] } });
    expect(updateProfileSpy).toHaveBeenCalled();
  });

  it('should display error message when form submission fails', async () => {
    const handleUserFormSpy = vi.fn();
    const { getByText, findByLabelText } = render(<AppProvider><Component handleUserForm={handleUserFormSpy} /></AppProvider>);
    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(findByLabelText('Please fill all required fields.')).toBeTruthy();
    });
  });
});
*/
