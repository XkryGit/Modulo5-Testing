import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';

describe('./project/project.mapper', () => {
  it('should return empty object when feeding undefined array', () => {
    //arrange
    const project = undefined;
    const resulEmpty = {
      comments: '',
      employees: [],
      externalId: '',
      id: '',
      isActive: false,
      name: '',
    };
    //act
    const result = mapProjectFromApiToVm(project);
    //assert
    expect(result).toEqual(resulEmpty);
  });

  it('should return empty object when feeding null array', () => {
    //arrange
    const project = null;
    const resulEmpty = {
      comments: '',
      employees: [],
      externalId: '',
      id: '',
      isActive: false,
      name: '',
    };
    //act
    const result = mapProjectFromApiToVm(project);
    //assert
    expect(result).toEqual(resulEmpty);
  });

  it('should return one item with values when passing one item with values', () => {
    // Arrange
    const project: apiModel.Project = {
      id: 'test id',
      isActive: true,
      name: 'test name',
      employees: [
        {
          id: 'hola',
          isAssigned: true,
          employeeName: 'test',
        },
      ],
    };

    const expectedResult: viewModel.Project = {
      id: 'test id',
      isActive: true,
      name: 'test name',
      employees: [
        {
          id: 'hola',
          isAssigned: true,
          employeeName: 'test',
        },
      ],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return two item with values when passing two item with values', () => {
    // Arrange
    const project: apiModel.Project = {
      id: 'test id',
      isActive: true,
      name: 'test name',
      employees: [
        {
          id: 'hola 1',
          isAssigned: true,
          employeeName: 'test',
        },
        {
          id: 'hola 2',
          isAssigned: true,
          employeeName: 'test',
        },
      ],
    };

    const expectedResult: viewModel.Project = {
      id: 'test id',
      isActive: true,
      name: 'test name',
      employees: [
        {
          id: 'hola 1',
          isAssigned: true,
          employeeName: 'test',
        },
        {
          id: 'hola 2',
          isAssigned: true,
          employeeName: 'test',
        },
      ],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
