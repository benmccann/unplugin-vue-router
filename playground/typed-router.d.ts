
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

/// <reference types="unplugin-vue-router/client" />

import type {
  RouteRecordInfo,
  _ParamValue,
  _ParamValueOneOrMore,
  _ParamValueZeroOrMore,
  _ParamValueZeroOrOne,
} from 'unplugin-vue-router'

declare module '@vue-router/routes' {
export interface RouteNamedMap {
  '/[...path]': RouteRecordInfo<'/[...path]', '/[...path]', { path: _ParamValue<true> }, { path: _ParamValue<false> }>,
  '/[name]': RouteRecordInfo<'/[name]', '/:name', { name: _ParamValue<true> }, { name: _ParamValue<false> }>,
  '/about': RouteRecordInfo<'/about', '/about', Record<any, never>, Record<any, never>>,
  '/articles': RouteRecordInfo<'/articles', '/articles', Record<any, never>, Record<any, never>>,
  '/articles/[id]+': RouteRecordInfo<'/articles/[id]+', '/articles/:id+', { id: _ParamValueOneOrMore<true> }, { id: _ParamValueOneOrMore<false> }>,
  '/articles/[id]': RouteRecordInfo<'/articles/[id]', '/articles/:id', { id: _ParamValue<true> }, { id: _ParamValue<false> }>,
  '/articles/': RouteRecordInfo<'/articles/', '/articles/', Record<any, never>, Record<any, never>>,
  '/': RouteRecordInfo<'/', '/', Record<any, never>, Record<any, never>>,
  '/multiple-[a]-[b]-params': RouteRecordInfo<'/multiple-[a]-[b]-params', '/multiple-:a-:b-params', { a: _ParamValue<true>, b: _ParamValue<true> }, { a: _ParamValue<false>, b: _ParamValue<false> }>,
  '/my-optional[slug]?': RouteRecordInfo<'/my-optional[slug]?', '/my-optional:slug?', { slug?: _ParamValueZeroOrOne<true> }, { slug?: _ParamValueZeroOrOne<false> }>,
  '/partial-[name]': RouteRecordInfo<'/partial-[name]', '/partial-:name', { name: _ParamValue<true> }, { name: _ParamValue<false> }>,
  '/users/[id]': RouteRecordInfo<'/users/[id]', '/users/:id', { id: _ParamValue<true> }, { id: _ParamValue<false> }>,
  '/users/edit': RouteRecordInfo<'/users/edit', '/users/edit', Record<any, never>, Record<any, never>>,
  '/users/': RouteRecordInfo<'/users/', '/users/', Record<any, never>, Record<any, never>>,
  '/haha/je change': RouteRecordInfo<'/haha/je change', '/haha/je change', Record<any, never>, Record<any, never>>,
  '/deep/nesting/works/too': RouteRecordInfo<'/deep/nesting/works/too', '/deep/nesting/works/too', Record<any, never>, Record<any, never>>,
 }
}

