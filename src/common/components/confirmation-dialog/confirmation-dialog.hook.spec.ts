import { renderHook, act } from '@testing-library/react';
import { createEmptyLookup } from 'common/models';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('useConfirmationDialog spec', () => {
  it('should return isOpen = true and the item to delete when onOpenDialog is called with a item', () => {
    // arrange
    const item = {
      id: '1',
      name: 'test',
    };
    //act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(item);
    });

    //assert
    expect(result.current.isOpen).toEqual(true);
    expect(result.current.itemToDelete).toEqual(item);
  });
  it('should return isOpen = false when onClose is called', () => {
    // arrange
    //act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onClose();
    });

    //assert
    expect(result.current.isOpen).toEqual(false);
  });
  it('should start createEmptyLookup when onAccept is started', () => {
    // arrange
    const item = {
      id: '1',
      name: 'test',
    };
    //act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(item);
      result.current.onAccept();
    });

    //assert
    expect(result.current.itemToDelete).toEqual(createEmptyLookup());
  });
});
