import axios, { AxiosResponse } from 'axios'
type ActionType = 'get' | 'post' | 'put' | 'patch' | 'delete'

export const customAxios = async (url: string, action: ActionType) => {
	const endpoint = `${process.env.REACT_APP_SERVER_URL}${url}`
	try {
		const response: AxiosResponse = await axios[action](endpoint)

		return response.data
	} catch (error) {
		console.error(`Error during ${action} request to ${endpoint}`, error)
		return undefined
	}
}
