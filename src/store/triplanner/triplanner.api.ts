import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { City, Country, Ticket } from '../../models/models'

export const triplannerApi = createApi({
  reducerPath: 'triplannerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.triplanner.uk/' }),
  endpoints: (builder) => ({
    getCities: builder.query<Array<City>, string>({
      query: (cityName: string) => ({
        url: `cities/${cityName}`
      })
    }),

    getTickets: builder.query<Array<Ticket>, { fromId: string, toId?: string, dDate?: string, rDate?: string}>({
      query: (arg) => {
        const { fromId, toId, dDate, rDate } = arg
        return {
          url: 'tickets',
          params: { fromId, toId, dDate, rDate }
        }
      }
    }),

    getCountries: builder.query<Array<Country>, string>({
      query: (countryName: string) => ({
        url: `countries/${countryName}`
      })
    }),

  }),
})
export const { useGetCitiesQuery, useGetTicketsQuery, useGetCountriesQuery } = triplannerApi