import {fetchStuff as mockFetchStuff} from './api'

jest.mock('./api')
beforeEach(() => jest.resetAllMocks())
