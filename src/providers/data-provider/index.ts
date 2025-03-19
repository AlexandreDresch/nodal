"use client";

import dataProviderNestjsQuery, {
  GraphQLClient,
  liveProvider as liveProviderNestjsQuery,
} from "@refinedev/nestjs-query";
import { createClient } from "graphql-ws";
import { fetchWrapper } from "./fetch-wrapper";

const API_URL = "https://api.nestjs-query.refine.dev/graphql";
const WS_URL = "wss://api.nestjs-query.refine.dev/graphql";
const API_BASE_URL = "https://api.crm.refine.dev";

const gqlClient = new GraphQLClient(API_URL, {
  fetch: (url: string, options: RequestInit) => {
    try {
      return fetchWrapper(url, options);
    } catch (error) {
      return Promise.reject(error as Error);
    }
  },
});

const wsClient =
  typeof window !== undefined
    ? createClient({
        url: WS_URL,
        connectionParams: () => {
          const accessToken = window.localStorage.getItem("access_token");

          return {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          };
        },
      })
    : undefined;

export const dataProvider = dataProviderNestjsQuery(gqlClient);
export const liveProvider = wsClient
  ? liveProviderNestjsQuery(wsClient)
  : undefined;
