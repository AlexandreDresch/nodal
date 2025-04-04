"use client";

import dataProviderNestjsQuery, {
  GraphQLClient,
  liveProvider as liveProviderNestjsQuery,
} from "@refinedev/nestjs-query";
import { createClient } from "graphql-ws";
import { fetchWrapper } from "./fetch-wrapper";

export const API_BASE_URL = "https://api.crm.refine.dev";
const API_URL = "https://api.crm.refine.dev";
const WS_URL = "wss://api.crm.refine.dev/graphql";

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
  typeof window !== "undefined"
    ? createClient({
        url: WS_URL,
        connectionParams: () => {
          const accessToken = localStorage.getItem("access_token");
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
