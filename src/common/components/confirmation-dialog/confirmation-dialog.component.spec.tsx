import React from 'react';
import { render, screen } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import userEvent from '@testing-library/user-event';

describe('ConfirmationDialogComponent component specs', () => {
  it('should display a emergent dialog with the corrects dates', () => {
    //Arrange
    const props = {
      isOpen: true,
      onAccept: null,
      onClose: null,
      title: 'testConfirmationDialogComponent',
      labels: { closeButton: 'closetest', acceptButton: 'acepttest' },
      children: 'testchildren',
    };
    //Act
    render(<ConfirmationDialogComponent {...props} />);
    const titleElement = screen.getByText('testConfirmationDialogComponent');
    const childrenElement = screen.getByText('testchildren');
    //Assert
    expect(titleElement).toBeInTheDocument();
    expect(childrenElement).toBeInTheDocument();
  });
  it('should close the emergent dialog when click in close buttom', () => {
    //Arrange
    const props = {
      isOpen: true,
      onAccept: null,
      onClose: null,
      title: 'test',
      labels: { closeButton: 'closetest', acceptButton: 'acepttest' },
      children: null,
    };
    //Act
    render(<ConfirmationDialogComponent {...props} />);
    userEvent.click(screen.getByTestId('close'));
    //Assert
    expect((props.isOpen = false));
  });
  it('should delete the element when click in accept buttom', () => {
    //Arrange
    const props = {
      isOpen: true,
      onAccept: null,
      onClose: null,
      title: 'test',
      labels: { closeButton: 'closetest', acceptButton: 'acepttest' },
      children: null,
    };
    //Act
    render(<ConfirmationDialogComponent {...props} />);
    userEvent.click(screen.getByTestId('accept'));
    //Assert
    expect((props.isOpen = false));
    expect((props.onAccept = true));
  });
});
