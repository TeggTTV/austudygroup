
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model GroupMember
 * 
 */
export type GroupMember = $Result.DefaultSelection<Prisma.$GroupMemberPayload>
/**
 * Model JoinRequest
 * 
 */
export type JoinRequest = $Result.DefaultSelection<Prisma.$JoinRequestPayload>
/**
 * Model FeedMessage
 * 
 */
export type FeedMessage = $Result.DefaultSelection<Prisma.$FeedMessagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupMember`: Exposes CRUD operations for the **GroupMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupMembers
    * const groupMembers = await prisma.groupMember.findMany()
    * ```
    */
  get groupMember(): Prisma.GroupMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.joinRequest`: Exposes CRUD operations for the **JoinRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JoinRequests
    * const joinRequests = await prisma.joinRequest.findMany()
    * ```
    */
  get joinRequest(): Prisma.JoinRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedMessage`: Exposes CRUD operations for the **FeedMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeedMessages
    * const feedMessages = await prisma.feedMessage.findMany()
    * ```
    */
  get feedMessage(): Prisma.FeedMessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends bigint
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Group: 'Group',
    GroupMember: 'GroupMember',
    JoinRequest: 'JoinRequest',
    FeedMessage: 'FeedMessage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "group" | "groupMember" | "joinRequest" | "feedMessage"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.GroupFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.GroupAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      GroupMember: {
        payload: Prisma.$GroupMemberPayload<ExtArgs>
        fields: Prisma.GroupMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findFirst: {
            args: Prisma.GroupMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findMany: {
            args: Prisma.GroupMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          create: {
            args: Prisma.GroupMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          createMany: {
            args: Prisma.GroupMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GroupMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          update: {
            args: Prisma.GroupMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          deleteMany: {
            args: Prisma.GroupMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GroupMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          aggregate: {
            args: Prisma.GroupMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupMember>
          }
          groupBy: {
            args: Prisma.GroupMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.GroupMemberFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.GroupMemberAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.GroupMemberCountArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberCountAggregateOutputType> | number
          }
        }
      }
      JoinRequest: {
        payload: Prisma.$JoinRequestPayload<ExtArgs>
        fields: Prisma.JoinRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JoinRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JoinRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          findFirst: {
            args: Prisma.JoinRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JoinRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          findMany: {
            args: Prisma.JoinRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>[]
          }
          create: {
            args: Prisma.JoinRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          createMany: {
            args: Prisma.JoinRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JoinRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          update: {
            args: Prisma.JoinRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          deleteMany: {
            args: Prisma.JoinRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JoinRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JoinRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          aggregate: {
            args: Prisma.JoinRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJoinRequest>
          }
          groupBy: {
            args: Prisma.JoinRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<JoinRequestGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.JoinRequestFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.JoinRequestAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.JoinRequestCountArgs<ExtArgs>
            result: $Utils.Optional<JoinRequestCountAggregateOutputType> | number
          }
        }
      }
      FeedMessage: {
        payload: Prisma.$FeedMessagePayload<ExtArgs>
        fields: Prisma.FeedMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedMessagePayload>
          }
          findFirst: {
            args: Prisma.FeedMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedMessagePayload>
          }
          findMany: {
            args: Prisma.FeedMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedMessagePayload>[]
          }
          create: {
            args: Prisma.FeedMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedMessagePayload>
          }
          createMany: {
            args: Prisma.FeedMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FeedMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedMessagePayload>
          }
          update: {
            args: Prisma.FeedMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedMessagePayload>
          }
          deleteMany: {
            args: Prisma.FeedMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FeedMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedMessagePayload>
          }
          aggregate: {
            args: Prisma.FeedMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedMessage>
          }
          groupBy: {
            args: Prisma.FeedMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedMessageGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FeedMessageFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FeedMessageAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FeedMessageCountArgs<ExtArgs>
            result: $Utils.Optional<FeedMessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    group?: GroupOmit
    groupMember?: GroupMemberOmit
    joinRequest?: JoinRequestOmit
    feedMessage?: FeedMessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ledGroups: number
    memberships: number
    requests: number
    feedMessages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ledGroups?: boolean | UserCountOutputTypeCountLedGroupsArgs
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
    requests?: boolean | UserCountOutputTypeCountRequestsArgs
    feedMessages?: boolean | UserCountOutputTypeCountFeedMessagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLedGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JoinRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedMessageWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    members: number
    requests: number
    feedMessages: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | GroupCountOutputTypeCountMembersArgs
    requests?: boolean | GroupCountOutputTypeCountRequestsArgs
    feedMessages?: boolean | GroupCountOutputTypeCountFeedMessagesArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JoinRequestWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountFeedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    avatarUrl: string | null
    role: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    avatarUrl: string | null
    role: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    avatarUrl: number
    role: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatarUrl?: true
    role?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatarUrl?: true
    role?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatarUrl?: true
    role?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    avatarUrl: string | null
    role: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatarUrl?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    ledGroups?: boolean | User$ledGroupsArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    requests?: boolean | User$requestsArgs<ExtArgs>
    feedMessages?: boolean | User$feedMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    avatarUrl?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "avatarUrl" | "role" | "password" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ledGroups?: boolean | User$ledGroupsArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    requests?: boolean | User$requestsArgs<ExtArgs>
    feedMessages?: boolean | User$feedMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ledGroups: Prisma.$GroupPayload<ExtArgs>[]
      memberships: Prisma.$GroupMemberPayload<ExtArgs>[]
      requests: Prisma.$JoinRequestPayload<ExtArgs>[]
      feedMessages: Prisma.$FeedMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      avatarUrl: string | null
      role: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ledGroups<T extends User$ledGroupsArgs<ExtArgs> = {}>(args?: Subset<T, User$ledGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requests<T extends User$requestsArgs<ExtArgs> = {}>(args?: Subset<T, User$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedMessages<T extends User$feedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$feedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.ledGroups
   */
  export type User$ledGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * User.memberships
   */
  export type User$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * User.requests
   */
  export type User$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    where?: JoinRequestWhereInput
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    cursor?: JoinRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JoinRequestScalarFieldEnum | JoinRequestScalarFieldEnum[]
  }

  /**
   * User.feedMessages
   */
  export type User$feedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedMessage
     */
    select?: FeedMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedMessage
     */
    omit?: FeedMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedMessageInclude<ExtArgs> | null
    where?: FeedMessageWhereInput
    orderBy?: FeedMessageOrderByWithRelationInput | FeedMessageOrderByWithRelationInput[]
    cursor?: FeedMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedMessageScalarFieldEnum | FeedMessageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupAvgAggregateOutputType = {
    minMembers: number | null
    maxMembers: number | null
  }

  export type GroupSumAggregateOutputType = {
    minMembers: number | null
    maxMembers: number | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    subject: string | null
    meetingFrequency: string | null
    minMembers: number | null
    maxMembers: number | null
    isPrivate: boolean | null
    profanityFilter: boolean | null
    createdAt: Date | null
    leaderId: string | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    subject: string | null
    meetingFrequency: string | null
    minMembers: number | null
    maxMembers: number | null
    isPrivate: boolean | null
    profanityFilter: boolean | null
    createdAt: Date | null
    leaderId: string | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    description: number
    subject: number
    meetingFrequency: number
    minMembers: number
    maxMembers: number
    isPrivate: number
    profanityFilter: number
    createdAt: number
    leaderId: number
    _all: number
  }


  export type GroupAvgAggregateInputType = {
    minMembers?: true
    maxMembers?: true
  }

  export type GroupSumAggregateInputType = {
    minMembers?: true
    maxMembers?: true
  }

  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    subject?: true
    meetingFrequency?: true
    minMembers?: true
    maxMembers?: true
    isPrivate?: true
    profanityFilter?: true
    createdAt?: true
    leaderId?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    subject?: true
    meetingFrequency?: true
    minMembers?: true
    maxMembers?: true
    isPrivate?: true
    profanityFilter?: true
    createdAt?: true
    leaderId?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    subject?: true
    meetingFrequency?: true
    minMembers?: true
    maxMembers?: true
    isPrivate?: true
    profanityFilter?: true
    createdAt?: true
    leaderId?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _avg?: GroupAvgAggregateInputType
    _sum?: GroupSumAggregateInputType
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    name: string
    description: string
    subject: string
    meetingFrequency: string
    minMembers: number
    maxMembers: number
    isPrivate: boolean
    profanityFilter: boolean
    createdAt: Date
    leaderId: string
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    subject?: boolean
    meetingFrequency?: boolean
    minMembers?: boolean
    maxMembers?: boolean
    isPrivate?: boolean
    profanityFilter?: boolean
    createdAt?: boolean
    leaderId?: boolean
    leader?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Group$membersArgs<ExtArgs>
    requests?: boolean | Group$requestsArgs<ExtArgs>
    feedMessages?: boolean | Group$feedMessagesArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>



  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    subject?: boolean
    meetingFrequency?: boolean
    minMembers?: boolean
    maxMembers?: boolean
    isPrivate?: boolean
    profanityFilter?: boolean
    createdAt?: boolean
    leaderId?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "subject" | "meetingFrequency" | "minMembers" | "maxMembers" | "isPrivate" | "profanityFilter" | "createdAt" | "leaderId", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leader?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Group$membersArgs<ExtArgs>
    requests?: boolean | Group$requestsArgs<ExtArgs>
    feedMessages?: boolean | Group$feedMessagesArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      leader: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$GroupMemberPayload<ExtArgs>[]
      requests: Prisma.$JoinRequestPayload<ExtArgs>[]
      feedMessages: Prisma.$FeedMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      subject: string
      meetingFrequency: string
      minMembers: number
      maxMembers: number
      isPrivate: boolean
      profanityFilter: boolean
      createdAt: Date
      leaderId: string
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * @param {GroupFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const group = await prisma.group.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: GroupFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Group.
     * @param {GroupAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const group = await prisma.group.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: GroupAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leader<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Group$membersArgs<ExtArgs> = {}>(args?: Subset<T, Group$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requests<T extends Group$requestsArgs<ExtArgs> = {}>(args?: Subset<T, Group$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedMessages<T extends Group$feedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Group$feedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly name: FieldRef<"Group", 'String'>
    readonly description: FieldRef<"Group", 'String'>
    readonly subject: FieldRef<"Group", 'String'>
    readonly meetingFrequency: FieldRef<"Group", 'String'>
    readonly minMembers: FieldRef<"Group", 'Int'>
    readonly maxMembers: FieldRef<"Group", 'Int'>
    readonly isPrivate: FieldRef<"Group", 'Boolean'>
    readonly profanityFilter: FieldRef<"Group", 'Boolean'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
    readonly leaderId: FieldRef<"Group", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group findRaw
   */
  export type GroupFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Group aggregateRaw
   */
  export type GroupAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Group.members
   */
  export type Group$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * Group.requests
   */
  export type Group$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    where?: JoinRequestWhereInput
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    cursor?: JoinRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JoinRequestScalarFieldEnum | JoinRequestScalarFieldEnum[]
  }

  /**
   * Group.feedMessages
   */
  export type Group$feedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedMessage
     */
    select?: FeedMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedMessage
     */
    omit?: FeedMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedMessageInclude<ExtArgs> | null
    where?: FeedMessageWhereInput
    orderBy?: FeedMessageOrderByWithRelationInput | FeedMessageOrderByWithRelationInput[]
    cursor?: FeedMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedMessageScalarFieldEnum | FeedMessageScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model GroupMember
   */

  export type AggregateGroupMember = {
    _count: GroupMemberCountAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  export type GroupMemberMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    userId: string | null
    joinedAt: Date | null
  }

  export type GroupMemberMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    userId: string | null
    joinedAt: Date | null
  }

  export type GroupMemberCountAggregateOutputType = {
    id: number
    groupId: number
    userId: number
    joinedAt: number
    _all: number
  }


  export type GroupMemberMinAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    joinedAt?: true
  }

  export type GroupMemberMaxAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    joinedAt?: true
  }

  export type GroupMemberCountAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    joinedAt?: true
    _all?: true
  }

  export type GroupMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMember to aggregate.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupMembers
    **/
    _count?: true | GroupMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GetGroupMemberAggregateType<T extends GroupMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupMember[P]>
      : GetScalarType<T[P], AggregateGroupMember[P]>
  }




  export type GroupMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithAggregationInput | GroupMemberOrderByWithAggregationInput[]
    by: GroupMemberScalarFieldEnum[] | GroupMemberScalarFieldEnum
    having?: GroupMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupMemberCountAggregateInputType | true
    _min?: GroupMemberMinAggregateInputType
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GroupMemberGroupByOutputType = {
    id: string
    groupId: string
    userId: string
    joinedAt: Date
    _count: GroupMemberCountAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  type GetGroupMemberGroupByPayload<T extends GroupMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
            : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
        }
      >
    >


  export type GroupMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    joinedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>



  export type GroupMemberSelectScalar = {
    id?: boolean
    groupId?: boolean
    userId?: boolean
    joinedAt?: boolean
  }

  export type GroupMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "userId" | "joinedAt", ExtArgs["result"]["groupMember"]>
  export type GroupMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GroupMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupMember"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupId: string
      userId: string
      joinedAt: Date
    }, ExtArgs["result"]["groupMember"]>
    composites: {}
  }

  type GroupMemberGetPayload<S extends boolean | null | undefined | GroupMemberDefaultArgs> = $Result.GetResult<Prisma.$GroupMemberPayload, S>

  type GroupMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupMemberCountAggregateInputType | true
    }

  export interface GroupMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupMember'], meta: { name: 'GroupMember' } }
    /**
     * Find zero or one GroupMember that matches the filter.
     * @param {GroupMemberFindUniqueArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupMemberFindUniqueArgs>(args: SelectSubset<T, GroupMemberFindUniqueArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupMemberFindUniqueOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupMemberFindFirstArgs>(args?: SelectSubset<T, GroupMemberFindFirstArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupMembers
     * const groupMembers = await prisma.groupMember.findMany()
     * 
     * // Get first 10 GroupMembers
     * const groupMembers = await prisma.groupMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupMemberWithIdOnly = await prisma.groupMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupMemberFindManyArgs>(args?: SelectSubset<T, GroupMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupMember.
     * @param {GroupMemberCreateArgs} args - Arguments to create a GroupMember.
     * @example
     * // Create one GroupMember
     * const GroupMember = await prisma.groupMember.create({
     *   data: {
     *     // ... data to create a GroupMember
     *   }
     * })
     * 
     */
    create<T extends GroupMemberCreateArgs>(args: SelectSubset<T, GroupMemberCreateArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupMembers.
     * @param {GroupMemberCreateManyArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMember = await prisma.groupMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupMemberCreateManyArgs>(args?: SelectSubset<T, GroupMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GroupMember.
     * @param {GroupMemberDeleteArgs} args - Arguments to delete one GroupMember.
     * @example
     * // Delete one GroupMember
     * const GroupMember = await prisma.groupMember.delete({
     *   where: {
     *     // ... filter to delete one GroupMember
     *   }
     * })
     * 
     */
    delete<T extends GroupMemberDeleteArgs>(args: SelectSubset<T, GroupMemberDeleteArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupMember.
     * @param {GroupMemberUpdateArgs} args - Arguments to update one GroupMember.
     * @example
     * // Update one GroupMember
     * const groupMember = await prisma.groupMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupMemberUpdateArgs>(args: SelectSubset<T, GroupMemberUpdateArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupMembers.
     * @param {GroupMemberDeleteManyArgs} args - Arguments to filter GroupMembers to delete.
     * @example
     * // Delete a few GroupMembers
     * const { count } = await prisma.groupMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupMemberDeleteManyArgs>(args?: SelectSubset<T, GroupMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupMembers
     * const groupMember = await prisma.groupMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupMemberUpdateManyArgs>(args: SelectSubset<T, GroupMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GroupMember.
     * @param {GroupMemberUpsertArgs} args - Arguments to update or create a GroupMember.
     * @example
     * // Update or create a GroupMember
     * const groupMember = await prisma.groupMember.upsert({
     *   create: {
     *     // ... data to create a GroupMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupMember we want to update
     *   }
     * })
     */
    upsert<T extends GroupMemberUpsertArgs>(args: SelectSubset<T, GroupMemberUpsertArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupMembers that matches the filter.
     * @param {GroupMemberFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const groupMember = await prisma.groupMember.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: GroupMemberFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a GroupMember.
     * @param {GroupMemberAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const groupMember = await prisma.groupMember.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: GroupMemberAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberCountArgs} args - Arguments to filter GroupMembers to count.
     * @example
     * // Count the number of GroupMembers
     * const count = await prisma.groupMember.count({
     *   where: {
     *     // ... the filter for the GroupMembers we want to count
     *   }
     * })
    **/
    count<T extends GroupMemberCountArgs>(
      args?: Subset<T, GroupMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupMemberAggregateArgs>(args: Subset<T, GroupMemberAggregateArgs>): Prisma.PrismaPromise<GetGroupMemberAggregateType<T>>

    /**
     * Group by GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupMemberGroupByArgs['orderBy'] }
        : { orderBy?: GroupMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupMember model
   */
  readonly fields: GroupMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GroupMember model
   */
  interface GroupMemberFieldRefs {
    readonly id: FieldRef<"GroupMember", 'String'>
    readonly groupId: FieldRef<"GroupMember", 'String'>
    readonly userId: FieldRef<"GroupMember", 'String'>
    readonly joinedAt: FieldRef<"GroupMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GroupMember findUnique
   */
  export type GroupMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember findUniqueOrThrow
   */
  export type GroupMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember findFirst
   */
  export type GroupMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember findFirstOrThrow
   */
  export type GroupMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember findMany
   */
  export type GroupMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembers to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember create
   */
  export type GroupMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupMember.
     */
    data: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
  }

  /**
   * GroupMember createMany
   */
  export type GroupMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMemberCreateManyInput | GroupMemberCreateManyInput[]
  }

  /**
   * GroupMember update
   */
  export type GroupMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupMember.
     */
    data: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
    /**
     * Choose, which GroupMember to update.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember updateMany
   */
  export type GroupMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to update.
     */
    limit?: number
  }

  /**
   * GroupMember upsert
   */
  export type GroupMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupMember to update in case it exists.
     */
    where: GroupMemberWhereUniqueInput
    /**
     * In case the GroupMember found by the `where` argument doesn't exist, create a new GroupMember with this data.
     */
    create: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
    /**
     * In case the GroupMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
  }

  /**
   * GroupMember delete
   */
  export type GroupMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter which GroupMember to delete.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember deleteMany
   */
  export type GroupMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMembers to delete
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to delete.
     */
    limit?: number
  }

  /**
   * GroupMember findRaw
   */
  export type GroupMemberFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * GroupMember aggregateRaw
   */
  export type GroupMemberAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * GroupMember without action
   */
  export type GroupMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
  }


  /**
   * Model JoinRequest
   */

  export type AggregateJoinRequest = {
    _count: JoinRequestCountAggregateOutputType | null
    _min: JoinRequestMinAggregateOutputType | null
    _max: JoinRequestMaxAggregateOutputType | null
  }

  export type JoinRequestMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    userId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type JoinRequestMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    userId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type JoinRequestCountAggregateOutputType = {
    id: number
    groupId: number
    userId: number
    status: number
    createdAt: number
    _all: number
  }


  export type JoinRequestMinAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    status?: true
    createdAt?: true
  }

  export type JoinRequestMaxAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    status?: true
    createdAt?: true
  }

  export type JoinRequestCountAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type JoinRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JoinRequest to aggregate.
     */
    where?: JoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinRequests to fetch.
     */
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JoinRequests
    **/
    _count?: true | JoinRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JoinRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JoinRequestMaxAggregateInputType
  }

  export type GetJoinRequestAggregateType<T extends JoinRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateJoinRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJoinRequest[P]>
      : GetScalarType<T[P], AggregateJoinRequest[P]>
  }




  export type JoinRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JoinRequestWhereInput
    orderBy?: JoinRequestOrderByWithAggregationInput | JoinRequestOrderByWithAggregationInput[]
    by: JoinRequestScalarFieldEnum[] | JoinRequestScalarFieldEnum
    having?: JoinRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JoinRequestCountAggregateInputType | true
    _min?: JoinRequestMinAggregateInputType
    _max?: JoinRequestMaxAggregateInputType
  }

  export type JoinRequestGroupByOutputType = {
    id: string
    groupId: string
    userId: string
    status: string
    createdAt: Date
    _count: JoinRequestCountAggregateOutputType | null
    _min: JoinRequestMinAggregateOutputType | null
    _max: JoinRequestMaxAggregateOutputType | null
  }

  type GetJoinRequestGroupByPayload<T extends JoinRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JoinRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JoinRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JoinRequestGroupByOutputType[P]>
            : GetScalarType<T[P], JoinRequestGroupByOutputType[P]>
        }
      >
    >


  export type JoinRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["joinRequest"]>



  export type JoinRequestSelectScalar = {
    id?: boolean
    groupId?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type JoinRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "userId" | "status" | "createdAt", ExtArgs["result"]["joinRequest"]>
  export type JoinRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $JoinRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JoinRequest"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupId: string
      userId: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["joinRequest"]>
    composites: {}
  }

  type JoinRequestGetPayload<S extends boolean | null | undefined | JoinRequestDefaultArgs> = $Result.GetResult<Prisma.$JoinRequestPayload, S>

  type JoinRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JoinRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JoinRequestCountAggregateInputType | true
    }

  export interface JoinRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JoinRequest'], meta: { name: 'JoinRequest' } }
    /**
     * Find zero or one JoinRequest that matches the filter.
     * @param {JoinRequestFindUniqueArgs} args - Arguments to find a JoinRequest
     * @example
     * // Get one JoinRequest
     * const joinRequest = await prisma.joinRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JoinRequestFindUniqueArgs>(args: SelectSubset<T, JoinRequestFindUniqueArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JoinRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JoinRequestFindUniqueOrThrowArgs} args - Arguments to find a JoinRequest
     * @example
     * // Get one JoinRequest
     * const joinRequest = await prisma.joinRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JoinRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, JoinRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JoinRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestFindFirstArgs} args - Arguments to find a JoinRequest
     * @example
     * // Get one JoinRequest
     * const joinRequest = await prisma.joinRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JoinRequestFindFirstArgs>(args?: SelectSubset<T, JoinRequestFindFirstArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JoinRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestFindFirstOrThrowArgs} args - Arguments to find a JoinRequest
     * @example
     * // Get one JoinRequest
     * const joinRequest = await prisma.joinRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JoinRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, JoinRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JoinRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JoinRequests
     * const joinRequests = await prisma.joinRequest.findMany()
     * 
     * // Get first 10 JoinRequests
     * const joinRequests = await prisma.joinRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const joinRequestWithIdOnly = await prisma.joinRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JoinRequestFindManyArgs>(args?: SelectSubset<T, JoinRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JoinRequest.
     * @param {JoinRequestCreateArgs} args - Arguments to create a JoinRequest.
     * @example
     * // Create one JoinRequest
     * const JoinRequest = await prisma.joinRequest.create({
     *   data: {
     *     // ... data to create a JoinRequest
     *   }
     * })
     * 
     */
    create<T extends JoinRequestCreateArgs>(args: SelectSubset<T, JoinRequestCreateArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JoinRequests.
     * @param {JoinRequestCreateManyArgs} args - Arguments to create many JoinRequests.
     * @example
     * // Create many JoinRequests
     * const joinRequest = await prisma.joinRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JoinRequestCreateManyArgs>(args?: SelectSubset<T, JoinRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a JoinRequest.
     * @param {JoinRequestDeleteArgs} args - Arguments to delete one JoinRequest.
     * @example
     * // Delete one JoinRequest
     * const JoinRequest = await prisma.joinRequest.delete({
     *   where: {
     *     // ... filter to delete one JoinRequest
     *   }
     * })
     * 
     */
    delete<T extends JoinRequestDeleteArgs>(args: SelectSubset<T, JoinRequestDeleteArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JoinRequest.
     * @param {JoinRequestUpdateArgs} args - Arguments to update one JoinRequest.
     * @example
     * // Update one JoinRequest
     * const joinRequest = await prisma.joinRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JoinRequestUpdateArgs>(args: SelectSubset<T, JoinRequestUpdateArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JoinRequests.
     * @param {JoinRequestDeleteManyArgs} args - Arguments to filter JoinRequests to delete.
     * @example
     * // Delete a few JoinRequests
     * const { count } = await prisma.joinRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JoinRequestDeleteManyArgs>(args?: SelectSubset<T, JoinRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JoinRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JoinRequests
     * const joinRequest = await prisma.joinRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JoinRequestUpdateManyArgs>(args: SelectSubset<T, JoinRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JoinRequest.
     * @param {JoinRequestUpsertArgs} args - Arguments to update or create a JoinRequest.
     * @example
     * // Update or create a JoinRequest
     * const joinRequest = await prisma.joinRequest.upsert({
     *   create: {
     *     // ... data to create a JoinRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JoinRequest we want to update
     *   }
     * })
     */
    upsert<T extends JoinRequestUpsertArgs>(args: SelectSubset<T, JoinRequestUpsertArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JoinRequests that matches the filter.
     * @param {JoinRequestFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const joinRequest = await prisma.joinRequest.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: JoinRequestFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a JoinRequest.
     * @param {JoinRequestAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const joinRequest = await prisma.joinRequest.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: JoinRequestAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of JoinRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestCountArgs} args - Arguments to filter JoinRequests to count.
     * @example
     * // Count the number of JoinRequests
     * const count = await prisma.joinRequest.count({
     *   where: {
     *     // ... the filter for the JoinRequests we want to count
     *   }
     * })
    **/
    count<T extends JoinRequestCountArgs>(
      args?: Subset<T, JoinRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JoinRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JoinRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JoinRequestAggregateArgs>(args: Subset<T, JoinRequestAggregateArgs>): Prisma.PrismaPromise<GetJoinRequestAggregateType<T>>

    /**
     * Group by JoinRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JoinRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JoinRequestGroupByArgs['orderBy'] }
        : { orderBy?: JoinRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JoinRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJoinRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JoinRequest model
   */
  readonly fields: JoinRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JoinRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JoinRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JoinRequest model
   */
  interface JoinRequestFieldRefs {
    readonly id: FieldRef<"JoinRequest", 'String'>
    readonly groupId: FieldRef<"JoinRequest", 'String'>
    readonly userId: FieldRef<"JoinRequest", 'String'>
    readonly status: FieldRef<"JoinRequest", 'String'>
    readonly createdAt: FieldRef<"JoinRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JoinRequest findUnique
   */
  export type JoinRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which JoinRequest to fetch.
     */
    where: JoinRequestWhereUniqueInput
  }

  /**
   * JoinRequest findUniqueOrThrow
   */
  export type JoinRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which JoinRequest to fetch.
     */
    where: JoinRequestWhereUniqueInput
  }

  /**
   * JoinRequest findFirst
   */
  export type JoinRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which JoinRequest to fetch.
     */
    where?: JoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinRequests to fetch.
     */
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JoinRequests.
     */
    cursor?: JoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JoinRequests.
     */
    distinct?: JoinRequestScalarFieldEnum | JoinRequestScalarFieldEnum[]
  }

  /**
   * JoinRequest findFirstOrThrow
   */
  export type JoinRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which JoinRequest to fetch.
     */
    where?: JoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinRequests to fetch.
     */
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JoinRequests.
     */
    cursor?: JoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JoinRequests.
     */
    distinct?: JoinRequestScalarFieldEnum | JoinRequestScalarFieldEnum[]
  }

  /**
   * JoinRequest findMany
   */
  export type JoinRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which JoinRequests to fetch.
     */
    where?: JoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinRequests to fetch.
     */
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JoinRequests.
     */
    cursor?: JoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinRequests.
     */
    skip?: number
    distinct?: JoinRequestScalarFieldEnum | JoinRequestScalarFieldEnum[]
  }

  /**
   * JoinRequest create
   */
  export type JoinRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a JoinRequest.
     */
    data: XOR<JoinRequestCreateInput, JoinRequestUncheckedCreateInput>
  }

  /**
   * JoinRequest createMany
   */
  export type JoinRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JoinRequests.
     */
    data: JoinRequestCreateManyInput | JoinRequestCreateManyInput[]
  }

  /**
   * JoinRequest update
   */
  export type JoinRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a JoinRequest.
     */
    data: XOR<JoinRequestUpdateInput, JoinRequestUncheckedUpdateInput>
    /**
     * Choose, which JoinRequest to update.
     */
    where: JoinRequestWhereUniqueInput
  }

  /**
   * JoinRequest updateMany
   */
  export type JoinRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JoinRequests.
     */
    data: XOR<JoinRequestUpdateManyMutationInput, JoinRequestUncheckedUpdateManyInput>
    /**
     * Filter which JoinRequests to update
     */
    where?: JoinRequestWhereInput
    /**
     * Limit how many JoinRequests to update.
     */
    limit?: number
  }

  /**
   * JoinRequest upsert
   */
  export type JoinRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the JoinRequest to update in case it exists.
     */
    where: JoinRequestWhereUniqueInput
    /**
     * In case the JoinRequest found by the `where` argument doesn't exist, create a new JoinRequest with this data.
     */
    create: XOR<JoinRequestCreateInput, JoinRequestUncheckedCreateInput>
    /**
     * In case the JoinRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JoinRequestUpdateInput, JoinRequestUncheckedUpdateInput>
  }

  /**
   * JoinRequest delete
   */
  export type JoinRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter which JoinRequest to delete.
     */
    where: JoinRequestWhereUniqueInput
  }

  /**
   * JoinRequest deleteMany
   */
  export type JoinRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JoinRequests to delete
     */
    where?: JoinRequestWhereInput
    /**
     * Limit how many JoinRequests to delete.
     */
    limit?: number
  }

  /**
   * JoinRequest findRaw
   */
  export type JoinRequestFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * JoinRequest aggregateRaw
   */
  export type JoinRequestAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * JoinRequest without action
   */
  export type JoinRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
  }


  /**
   * Model FeedMessage
   */

  export type AggregateFeedMessage = {
    _count: FeedMessageCountAggregateOutputType | null
    _min: FeedMessageMinAggregateOutputType | null
    _max: FeedMessageMaxAggregateOutputType | null
  }

  export type FeedMessageMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    userId: string | null
    content: string | null
    fileUrl: string | null
    fileName: string | null
    createdAt: Date | null
  }

  export type FeedMessageMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    userId: string | null
    content: string | null
    fileUrl: string | null
    fileName: string | null
    createdAt: Date | null
  }

  export type FeedMessageCountAggregateOutputType = {
    id: number
    groupId: number
    userId: number
    content: number
    fileUrl: number
    fileName: number
    createdAt: number
    _all: number
  }


  export type FeedMessageMinAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    content?: true
    fileUrl?: true
    fileName?: true
    createdAt?: true
  }

  export type FeedMessageMaxAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    content?: true
    fileUrl?: true
    fileName?: true
    createdAt?: true
  }

  export type FeedMessageCountAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    content?: true
    fileUrl?: true
    fileName?: true
    createdAt?: true
    _all?: true
  }

  export type FeedMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedMessage to aggregate.
     */
    where?: FeedMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedMessages to fetch.
     */
    orderBy?: FeedMessageOrderByWithRelationInput | FeedMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeedMessages
    **/
    _count?: true | FeedMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedMessageMaxAggregateInputType
  }

  export type GetFeedMessageAggregateType<T extends FeedMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedMessage[P]>
      : GetScalarType<T[P], AggregateFeedMessage[P]>
  }




  export type FeedMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedMessageWhereInput
    orderBy?: FeedMessageOrderByWithAggregationInput | FeedMessageOrderByWithAggregationInput[]
    by: FeedMessageScalarFieldEnum[] | FeedMessageScalarFieldEnum
    having?: FeedMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedMessageCountAggregateInputType | true
    _min?: FeedMessageMinAggregateInputType
    _max?: FeedMessageMaxAggregateInputType
  }

  export type FeedMessageGroupByOutputType = {
    id: string
    groupId: string
    userId: string
    content: string
    fileUrl: string | null
    fileName: string | null
    createdAt: Date
    _count: FeedMessageCountAggregateOutputType | null
    _min: FeedMessageMinAggregateOutputType | null
    _max: FeedMessageMaxAggregateOutputType | null
  }

  type GetFeedMessageGroupByPayload<T extends FeedMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedMessageGroupByOutputType[P]>
            : GetScalarType<T[P], FeedMessageGroupByOutputType[P]>
        }
      >
    >


  export type FeedMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    content?: boolean
    fileUrl?: boolean
    fileName?: boolean
    createdAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedMessage"]>



  export type FeedMessageSelectScalar = {
    id?: boolean
    groupId?: boolean
    userId?: boolean
    content?: boolean
    fileUrl?: boolean
    fileName?: boolean
    createdAt?: boolean
  }

  export type FeedMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "userId" | "content" | "fileUrl" | "fileName" | "createdAt", ExtArgs["result"]["feedMessage"]>
  export type FeedMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FeedMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeedMessage"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupId: string
      userId: string
      content: string
      fileUrl: string | null
      fileName: string | null
      createdAt: Date
    }, ExtArgs["result"]["feedMessage"]>
    composites: {}
  }

  type FeedMessageGetPayload<S extends boolean | null | undefined | FeedMessageDefaultArgs> = $Result.GetResult<Prisma.$FeedMessagePayload, S>

  type FeedMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedMessageCountAggregateInputType | true
    }

  export interface FeedMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeedMessage'], meta: { name: 'FeedMessage' } }
    /**
     * Find zero or one FeedMessage that matches the filter.
     * @param {FeedMessageFindUniqueArgs} args - Arguments to find a FeedMessage
     * @example
     * // Get one FeedMessage
     * const feedMessage = await prisma.feedMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedMessageFindUniqueArgs>(args: SelectSubset<T, FeedMessageFindUniqueArgs<ExtArgs>>): Prisma__FeedMessageClient<$Result.GetResult<Prisma.$FeedMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeedMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedMessageFindUniqueOrThrowArgs} args - Arguments to find a FeedMessage
     * @example
     * // Get one FeedMessage
     * const feedMessage = await prisma.feedMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedMessageClient<$Result.GetResult<Prisma.$FeedMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeedMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedMessageFindFirstArgs} args - Arguments to find a FeedMessage
     * @example
     * // Get one FeedMessage
     * const feedMessage = await prisma.feedMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedMessageFindFirstArgs>(args?: SelectSubset<T, FeedMessageFindFirstArgs<ExtArgs>>): Prisma__FeedMessageClient<$Result.GetResult<Prisma.$FeedMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeedMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedMessageFindFirstOrThrowArgs} args - Arguments to find a FeedMessage
     * @example
     * // Get one FeedMessage
     * const feedMessage = await prisma.feedMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedMessageClient<$Result.GetResult<Prisma.$FeedMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeedMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeedMessages
     * const feedMessages = await prisma.feedMessage.findMany()
     * 
     * // Get first 10 FeedMessages
     * const feedMessages = await prisma.feedMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedMessageWithIdOnly = await prisma.feedMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedMessageFindManyArgs>(args?: SelectSubset<T, FeedMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeedMessage.
     * @param {FeedMessageCreateArgs} args - Arguments to create a FeedMessage.
     * @example
     * // Create one FeedMessage
     * const FeedMessage = await prisma.feedMessage.create({
     *   data: {
     *     // ... data to create a FeedMessage
     *   }
     * })
     * 
     */
    create<T extends FeedMessageCreateArgs>(args: SelectSubset<T, FeedMessageCreateArgs<ExtArgs>>): Prisma__FeedMessageClient<$Result.GetResult<Prisma.$FeedMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeedMessages.
     * @param {FeedMessageCreateManyArgs} args - Arguments to create many FeedMessages.
     * @example
     * // Create many FeedMessages
     * const feedMessage = await prisma.feedMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedMessageCreateManyArgs>(args?: SelectSubset<T, FeedMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FeedMessage.
     * @param {FeedMessageDeleteArgs} args - Arguments to delete one FeedMessage.
     * @example
     * // Delete one FeedMessage
     * const FeedMessage = await prisma.feedMessage.delete({
     *   where: {
     *     // ... filter to delete one FeedMessage
     *   }
     * })
     * 
     */
    delete<T extends FeedMessageDeleteArgs>(args: SelectSubset<T, FeedMessageDeleteArgs<ExtArgs>>): Prisma__FeedMessageClient<$Result.GetResult<Prisma.$FeedMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeedMessage.
     * @param {FeedMessageUpdateArgs} args - Arguments to update one FeedMessage.
     * @example
     * // Update one FeedMessage
     * const feedMessage = await prisma.feedMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedMessageUpdateArgs>(args: SelectSubset<T, FeedMessageUpdateArgs<ExtArgs>>): Prisma__FeedMessageClient<$Result.GetResult<Prisma.$FeedMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeedMessages.
     * @param {FeedMessageDeleteManyArgs} args - Arguments to filter FeedMessages to delete.
     * @example
     * // Delete a few FeedMessages
     * const { count } = await prisma.feedMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedMessageDeleteManyArgs>(args?: SelectSubset<T, FeedMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeedMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeedMessages
     * const feedMessage = await prisma.feedMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedMessageUpdateManyArgs>(args: SelectSubset<T, FeedMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FeedMessage.
     * @param {FeedMessageUpsertArgs} args - Arguments to update or create a FeedMessage.
     * @example
     * // Update or create a FeedMessage
     * const feedMessage = await prisma.feedMessage.upsert({
     *   create: {
     *     // ... data to create a FeedMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeedMessage we want to update
     *   }
     * })
     */
    upsert<T extends FeedMessageUpsertArgs>(args: SelectSubset<T, FeedMessageUpsertArgs<ExtArgs>>): Prisma__FeedMessageClient<$Result.GetResult<Prisma.$FeedMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeedMessages that matches the filter.
     * @param {FeedMessageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const feedMessage = await prisma.feedMessage.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: FeedMessageFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a FeedMessage.
     * @param {FeedMessageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const feedMessage = await prisma.feedMessage.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FeedMessageAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of FeedMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedMessageCountArgs} args - Arguments to filter FeedMessages to count.
     * @example
     * // Count the number of FeedMessages
     * const count = await prisma.feedMessage.count({
     *   where: {
     *     // ... the filter for the FeedMessages we want to count
     *   }
     * })
    **/
    count<T extends FeedMessageCountArgs>(
      args?: Subset<T, FeedMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeedMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedMessageAggregateArgs>(args: Subset<T, FeedMessageAggregateArgs>): Prisma.PrismaPromise<GetFeedMessageAggregateType<T>>

    /**
     * Group by FeedMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedMessageGroupByArgs['orderBy'] }
        : { orderBy?: FeedMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeedMessage model
   */
  readonly fields: FeedMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeedMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FeedMessage model
   */
  interface FeedMessageFieldRefs {
    readonly id: FieldRef<"FeedMessage", 'String'>
    readonly groupId: FieldRef<"FeedMessage", 'String'>
    readonly userId: FieldRef<"FeedMessage", 'String'>
    readonly content: FieldRef<"FeedMessage", 'String'>
    readonly fileUrl: FieldRef<"FeedMessage", 'String'>
    readonly fileName: FieldRef<"FeedMessage", 'String'>
    readonly createdAt: FieldRef<"FeedMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FeedMessage findUnique
   */
  export type FeedMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedMessage
     */
    select?: FeedMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedMessage
     */
    omit?: FeedMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedMessageInclude<ExtArgs> | null
    /**
     * Filter, which FeedMessage to fetch.
     */
    where: FeedMessageWhereUniqueInput
  }

  /**
   * FeedMessage findUniqueOrThrow
   */
  export type FeedMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedMessage
     */
    select?: FeedMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedMessage
     */
    omit?: FeedMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedMessageInclude<ExtArgs> | null
    /**
     * Filter, which FeedMessage to fetch.
     */
    where: FeedMessageWhereUniqueInput
  }

  /**
   * FeedMessage findFirst
   */
  export type FeedMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedMessage
     */
    select?: FeedMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedMessage
     */
    omit?: FeedMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedMessageInclude<ExtArgs> | null
    /**
     * Filter, which FeedMessage to fetch.
     */
    where?: FeedMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedMessages to fetch.
     */
    orderBy?: FeedMessageOrderByWithRelationInput | FeedMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedMessages.
     */
    cursor?: FeedMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedMessages.
     */
    distinct?: FeedMessageScalarFieldEnum | FeedMessageScalarFieldEnum[]
  }

  /**
   * FeedMessage findFirstOrThrow
   */
  export type FeedMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedMessage
     */
    select?: FeedMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedMessage
     */
    omit?: FeedMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedMessageInclude<ExtArgs> | null
    /**
     * Filter, which FeedMessage to fetch.
     */
    where?: FeedMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedMessages to fetch.
     */
    orderBy?: FeedMessageOrderByWithRelationInput | FeedMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedMessages.
     */
    cursor?: FeedMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedMessages.
     */
    distinct?: FeedMessageScalarFieldEnum | FeedMessageScalarFieldEnum[]
  }

  /**
   * FeedMessage findMany
   */
  export type FeedMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedMessage
     */
    select?: FeedMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedMessage
     */
    omit?: FeedMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedMessageInclude<ExtArgs> | null
    /**
     * Filter, which FeedMessages to fetch.
     */
    where?: FeedMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedMessages to fetch.
     */
    orderBy?: FeedMessageOrderByWithRelationInput | FeedMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeedMessages.
     */
    cursor?: FeedMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedMessages.
     */
    skip?: number
    distinct?: FeedMessageScalarFieldEnum | FeedMessageScalarFieldEnum[]
  }

  /**
   * FeedMessage create
   */
  export type FeedMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedMessage
     */
    select?: FeedMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedMessage
     */
    omit?: FeedMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a FeedMessage.
     */
    data: XOR<FeedMessageCreateInput, FeedMessageUncheckedCreateInput>
  }

  /**
   * FeedMessage createMany
   */
  export type FeedMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeedMessages.
     */
    data: FeedMessageCreateManyInput | FeedMessageCreateManyInput[]
  }

  /**
   * FeedMessage update
   */
  export type FeedMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedMessage
     */
    select?: FeedMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedMessage
     */
    omit?: FeedMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a FeedMessage.
     */
    data: XOR<FeedMessageUpdateInput, FeedMessageUncheckedUpdateInput>
    /**
     * Choose, which FeedMessage to update.
     */
    where: FeedMessageWhereUniqueInput
  }

  /**
   * FeedMessage updateMany
   */
  export type FeedMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeedMessages.
     */
    data: XOR<FeedMessageUpdateManyMutationInput, FeedMessageUncheckedUpdateManyInput>
    /**
     * Filter which FeedMessages to update
     */
    where?: FeedMessageWhereInput
    /**
     * Limit how many FeedMessages to update.
     */
    limit?: number
  }

  /**
   * FeedMessage upsert
   */
  export type FeedMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedMessage
     */
    select?: FeedMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedMessage
     */
    omit?: FeedMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the FeedMessage to update in case it exists.
     */
    where: FeedMessageWhereUniqueInput
    /**
     * In case the FeedMessage found by the `where` argument doesn't exist, create a new FeedMessage with this data.
     */
    create: XOR<FeedMessageCreateInput, FeedMessageUncheckedCreateInput>
    /**
     * In case the FeedMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedMessageUpdateInput, FeedMessageUncheckedUpdateInput>
  }

  /**
   * FeedMessage delete
   */
  export type FeedMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedMessage
     */
    select?: FeedMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedMessage
     */
    omit?: FeedMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedMessageInclude<ExtArgs> | null
    /**
     * Filter which FeedMessage to delete.
     */
    where: FeedMessageWhereUniqueInput
  }

  /**
   * FeedMessage deleteMany
   */
  export type FeedMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedMessages to delete
     */
    where?: FeedMessageWhereInput
    /**
     * Limit how many FeedMessages to delete.
     */
    limit?: number
  }

  /**
   * FeedMessage findRaw
   */
  export type FeedMessageFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * FeedMessage aggregateRaw
   */
  export type FeedMessageAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * FeedMessage without action
   */
  export type FeedMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedMessage
     */
    select?: FeedMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedMessage
     */
    omit?: FeedMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedMessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    avatarUrl: 'avatarUrl',
    role: 'role',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    subject: 'subject',
    meetingFrequency: 'meetingFrequency',
    minMembers: 'minMembers',
    maxMembers: 'maxMembers',
    isPrivate: 'isPrivate',
    profanityFilter: 'profanityFilter',
    createdAt: 'createdAt',
    leaderId: 'leaderId'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const GroupMemberScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    userId: 'userId',
    joinedAt: 'joinedAt'
  };

  export type GroupMemberScalarFieldEnum = (typeof GroupMemberScalarFieldEnum)[keyof typeof GroupMemberScalarFieldEnum]


  export const JoinRequestScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    userId: 'userId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type JoinRequestScalarFieldEnum = (typeof JoinRequestScalarFieldEnum)[keyof typeof JoinRequestScalarFieldEnum]


  export const FeedMessageScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    userId: 'userId',
    content: 'content',
    fileUrl: 'fileUrl',
    fileName: 'fileName',
    createdAt: 'createdAt'
  };

  export type FeedMessageScalarFieldEnum = (typeof FeedMessageScalarFieldEnum)[keyof typeof FeedMessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    ledGroups?: GroupListRelationFilter
    memberships?: GroupMemberListRelationFilter
    requests?: JoinRequestListRelationFilter
    feedMessages?: FeedMessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    ledGroups?: GroupOrderByRelationAggregateInput
    memberships?: GroupMemberOrderByRelationAggregateInput
    requests?: JoinRequestOrderByRelationAggregateInput
    feedMessages?: FeedMessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    ledGroups?: GroupListRelationFilter
    memberships?: GroupMemberListRelationFilter
    requests?: JoinRequestListRelationFilter
    feedMessages?: FeedMessageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    description?: StringFilter<"Group"> | string
    subject?: StringFilter<"Group"> | string
    meetingFrequency?: StringFilter<"Group"> | string
    minMembers?: IntFilter<"Group"> | number
    maxMembers?: IntFilter<"Group"> | number
    isPrivate?: BoolFilter<"Group"> | boolean
    profanityFilter?: BoolFilter<"Group"> | boolean
    createdAt?: DateTimeFilter<"Group"> | Date | string
    leaderId?: StringFilter<"Group"> | string
    leader?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: GroupMemberListRelationFilter
    requests?: JoinRequestListRelationFilter
    feedMessages?: FeedMessageListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    subject?: SortOrder
    meetingFrequency?: SortOrder
    minMembers?: SortOrder
    maxMembers?: SortOrder
    isPrivate?: SortOrder
    profanityFilter?: SortOrder
    createdAt?: SortOrder
    leaderId?: SortOrder
    leader?: UserOrderByWithRelationInput
    members?: GroupMemberOrderByRelationAggregateInput
    requests?: JoinRequestOrderByRelationAggregateInput
    feedMessages?: FeedMessageOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    description?: StringFilter<"Group"> | string
    subject?: StringFilter<"Group"> | string
    meetingFrequency?: StringFilter<"Group"> | string
    minMembers?: IntFilter<"Group"> | number
    maxMembers?: IntFilter<"Group"> | number
    isPrivate?: BoolFilter<"Group"> | boolean
    profanityFilter?: BoolFilter<"Group"> | boolean
    createdAt?: DateTimeFilter<"Group"> | Date | string
    leaderId?: StringFilter<"Group"> | string
    leader?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: GroupMemberListRelationFilter
    requests?: JoinRequestListRelationFilter
    feedMessages?: FeedMessageListRelationFilter
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    subject?: SortOrder
    meetingFrequency?: SortOrder
    minMembers?: SortOrder
    maxMembers?: SortOrder
    isPrivate?: SortOrder
    profanityFilter?: SortOrder
    createdAt?: SortOrder
    leaderId?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _avg?: GroupAvgOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
    _sum?: GroupSumOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Group"> | string
    name?: StringWithAggregatesFilter<"Group"> | string
    description?: StringWithAggregatesFilter<"Group"> | string
    subject?: StringWithAggregatesFilter<"Group"> | string
    meetingFrequency?: StringWithAggregatesFilter<"Group"> | string
    minMembers?: IntWithAggregatesFilter<"Group"> | number
    maxMembers?: IntWithAggregatesFilter<"Group"> | number
    isPrivate?: BoolWithAggregatesFilter<"Group"> | boolean
    profanityFilter?: BoolWithAggregatesFilter<"Group"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    leaderId?: StringWithAggregatesFilter<"Group"> | string
  }

  export type GroupMemberWhereInput = {
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    id?: StringFilter<"GroupMember"> | string
    groupId?: StringFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
    joinedAt?: DateTimeFilter<"GroupMember"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GroupMemberOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    group?: GroupOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type GroupMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    groupId_userId?: GroupMemberGroupIdUserIdCompoundUniqueInput
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    groupId?: StringFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
    joinedAt?: DateTimeFilter<"GroupMember"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "groupId_userId">

  export type GroupMemberOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    _count?: GroupMemberCountOrderByAggregateInput
    _max?: GroupMemberMaxOrderByAggregateInput
    _min?: GroupMemberMinOrderByAggregateInput
  }

  export type GroupMemberScalarWhereWithAggregatesInput = {
    AND?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    OR?: GroupMemberScalarWhereWithAggregatesInput[]
    NOT?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupMember"> | string
    groupId?: StringWithAggregatesFilter<"GroupMember"> | string
    userId?: StringWithAggregatesFilter<"GroupMember"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"GroupMember"> | Date | string
  }

  export type JoinRequestWhereInput = {
    AND?: JoinRequestWhereInput | JoinRequestWhereInput[]
    OR?: JoinRequestWhereInput[]
    NOT?: JoinRequestWhereInput | JoinRequestWhereInput[]
    id?: StringFilter<"JoinRequest"> | string
    groupId?: StringFilter<"JoinRequest"> | string
    userId?: StringFilter<"JoinRequest"> | string
    status?: StringFilter<"JoinRequest"> | string
    createdAt?: DateTimeFilter<"JoinRequest"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type JoinRequestOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    group?: GroupOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type JoinRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    groupId_userId?: JoinRequestGroupIdUserIdCompoundUniqueInput
    AND?: JoinRequestWhereInput | JoinRequestWhereInput[]
    OR?: JoinRequestWhereInput[]
    NOT?: JoinRequestWhereInput | JoinRequestWhereInput[]
    groupId?: StringFilter<"JoinRequest"> | string
    userId?: StringFilter<"JoinRequest"> | string
    status?: StringFilter<"JoinRequest"> | string
    createdAt?: DateTimeFilter<"JoinRequest"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "groupId_userId">

  export type JoinRequestOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: JoinRequestCountOrderByAggregateInput
    _max?: JoinRequestMaxOrderByAggregateInput
    _min?: JoinRequestMinOrderByAggregateInput
  }

  export type JoinRequestScalarWhereWithAggregatesInput = {
    AND?: JoinRequestScalarWhereWithAggregatesInput | JoinRequestScalarWhereWithAggregatesInput[]
    OR?: JoinRequestScalarWhereWithAggregatesInput[]
    NOT?: JoinRequestScalarWhereWithAggregatesInput | JoinRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JoinRequest"> | string
    groupId?: StringWithAggregatesFilter<"JoinRequest"> | string
    userId?: StringWithAggregatesFilter<"JoinRequest"> | string
    status?: StringWithAggregatesFilter<"JoinRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"JoinRequest"> | Date | string
  }

  export type FeedMessageWhereInput = {
    AND?: FeedMessageWhereInput | FeedMessageWhereInput[]
    OR?: FeedMessageWhereInput[]
    NOT?: FeedMessageWhereInput | FeedMessageWhereInput[]
    id?: StringFilter<"FeedMessage"> | string
    groupId?: StringFilter<"FeedMessage"> | string
    userId?: StringFilter<"FeedMessage"> | string
    content?: StringFilter<"FeedMessage"> | string
    fileUrl?: StringNullableFilter<"FeedMessage"> | string | null
    fileName?: StringNullableFilter<"FeedMessage"> | string | null
    createdAt?: DateTimeFilter<"FeedMessage"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FeedMessageOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    createdAt?: SortOrder
    group?: GroupOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type FeedMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeedMessageWhereInput | FeedMessageWhereInput[]
    OR?: FeedMessageWhereInput[]
    NOT?: FeedMessageWhereInput | FeedMessageWhereInput[]
    groupId?: StringFilter<"FeedMessage"> | string
    userId?: StringFilter<"FeedMessage"> | string
    content?: StringFilter<"FeedMessage"> | string
    fileUrl?: StringNullableFilter<"FeedMessage"> | string | null
    fileName?: StringNullableFilter<"FeedMessage"> | string | null
    createdAt?: DateTimeFilter<"FeedMessage"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FeedMessageOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    createdAt?: SortOrder
    _count?: FeedMessageCountOrderByAggregateInput
    _max?: FeedMessageMaxOrderByAggregateInput
    _min?: FeedMessageMinOrderByAggregateInput
  }

  export type FeedMessageScalarWhereWithAggregatesInput = {
    AND?: FeedMessageScalarWhereWithAggregatesInput | FeedMessageScalarWhereWithAggregatesInput[]
    OR?: FeedMessageScalarWhereWithAggregatesInput[]
    NOT?: FeedMessageScalarWhereWithAggregatesInput | FeedMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FeedMessage"> | string
    groupId?: StringWithAggregatesFilter<"FeedMessage"> | string
    userId?: StringWithAggregatesFilter<"FeedMessage"> | string
    content?: StringWithAggregatesFilter<"FeedMessage"> | string
    fileUrl?: StringNullableWithAggregatesFilter<"FeedMessage"> | string | null
    fileName?: StringNullableWithAggregatesFilter<"FeedMessage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FeedMessage"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    avatarUrl?: string | null
    role?: string
    password?: string
    createdAt?: Date | string
    ledGroups?: GroupCreateNestedManyWithoutLeaderInput
    memberships?: GroupMemberCreateNestedManyWithoutUserInput
    requests?: JoinRequestCreateNestedManyWithoutUserInput
    feedMessages?: FeedMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    avatarUrl?: string | null
    role?: string
    password?: string
    createdAt?: Date | string
    ledGroups?: GroupUncheckedCreateNestedManyWithoutLeaderInput
    memberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    requests?: JoinRequestUncheckedCreateNestedManyWithoutUserInput
    feedMessages?: FeedMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledGroups?: GroupUpdateManyWithoutLeaderNestedInput
    memberships?: GroupMemberUpdateManyWithoutUserNestedInput
    requests?: JoinRequestUpdateManyWithoutUserNestedInput
    feedMessages?: FeedMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledGroups?: GroupUncheckedUpdateManyWithoutLeaderNestedInput
    memberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    requests?: JoinRequestUncheckedUpdateManyWithoutUserNestedInput
    feedMessages?: FeedMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    avatarUrl?: string | null
    role?: string
    password?: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupCreateInput = {
    id?: string
    name: string
    description: string
    subject: string
    meetingFrequency: string
    minMembers: number
    maxMembers: number
    isPrivate?: boolean
    profanityFilter?: boolean
    createdAt?: Date | string
    leader: UserCreateNestedOneWithoutLedGroupsInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    requests?: JoinRequestCreateNestedManyWithoutGroupInput
    feedMessages?: FeedMessageCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    subject: string
    meetingFrequency: string
    minMembers: number
    maxMembers: number
    isPrivate?: boolean
    profanityFilter?: boolean
    createdAt?: Date | string
    leaderId: string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    requests?: JoinRequestUncheckedCreateNestedManyWithoutGroupInput
    feedMessages?: FeedMessageUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    meetingFrequency?: StringFieldUpdateOperationsInput | string
    minMembers?: IntFieldUpdateOperationsInput | number
    maxMembers?: IntFieldUpdateOperationsInput | number
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    profanityFilter?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leader?: UserUpdateOneRequiredWithoutLedGroupsNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    requests?: JoinRequestUpdateManyWithoutGroupNestedInput
    feedMessages?: FeedMessageUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    meetingFrequency?: StringFieldUpdateOperationsInput | string
    minMembers?: IntFieldUpdateOperationsInput | number
    maxMembers?: IntFieldUpdateOperationsInput | number
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    profanityFilter?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaderId?: StringFieldUpdateOperationsInput | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    requests?: JoinRequestUncheckedUpdateManyWithoutGroupNestedInput
    feedMessages?: FeedMessageUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    name: string
    description: string
    subject: string
    meetingFrequency: string
    minMembers: number
    maxMembers: number
    isPrivate?: boolean
    profanityFilter?: boolean
    createdAt?: Date | string
    leaderId: string
  }

  export type GroupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    meetingFrequency?: StringFieldUpdateOperationsInput | string
    minMembers?: IntFieldUpdateOperationsInput | number
    maxMembers?: IntFieldUpdateOperationsInput | number
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    profanityFilter?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    meetingFrequency?: StringFieldUpdateOperationsInput | string
    minMembers?: IntFieldUpdateOperationsInput | number
    maxMembers?: IntFieldUpdateOperationsInput | number
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    profanityFilter?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaderId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupMemberCreateInput = {
    id?: string
    joinedAt?: Date | string
    group: GroupCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type GroupMemberUncheckedCreateInput = {
    id?: string
    groupId: string
    userId: string
    joinedAt?: Date | string
  }

  export type GroupMemberUpdateInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type GroupMemberUncheckedUpdateInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberCreateManyInput = {
    id?: string
    groupId: string
    userId: string
    joinedAt?: Date | string
  }

  export type GroupMemberUpdateManyMutationInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUncheckedUpdateManyInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinRequestCreateInput = {
    id?: string
    status: string
    createdAt?: Date | string
    group: GroupCreateNestedOneWithoutRequestsInput
    user: UserCreateNestedOneWithoutRequestsInput
  }

  export type JoinRequestUncheckedCreateInput = {
    id?: string
    groupId: string
    userId: string
    status: string
    createdAt?: Date | string
  }

  export type JoinRequestUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutRequestsNestedInput
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type JoinRequestUncheckedUpdateInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinRequestCreateManyInput = {
    id?: string
    groupId: string
    userId: string
    status: string
    createdAt?: Date | string
  }

  export type JoinRequestUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinRequestUncheckedUpdateManyInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedMessageCreateInput = {
    id?: string
    content: string
    fileUrl?: string | null
    fileName?: string | null
    createdAt?: Date | string
    group: GroupCreateNestedOneWithoutFeedMessagesInput
    user: UserCreateNestedOneWithoutFeedMessagesInput
  }

  export type FeedMessageUncheckedCreateInput = {
    id?: string
    groupId: string
    userId: string
    content: string
    fileUrl?: string | null
    fileName?: string | null
    createdAt?: Date | string
  }

  export type FeedMessageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutFeedMessagesNestedInput
    user?: UserUpdateOneRequiredWithoutFeedMessagesNestedInput
  }

  export type FeedMessageUncheckedUpdateInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedMessageCreateManyInput = {
    id?: string
    groupId: string
    userId: string
    content: string
    fileUrl?: string | null
    fileName?: string | null
    createdAt?: Date | string
  }

  export type FeedMessageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedMessageUncheckedUpdateManyInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type GroupMemberListRelationFilter = {
    every?: GroupMemberWhereInput
    some?: GroupMemberWhereInput
    none?: GroupMemberWhereInput
  }

  export type JoinRequestListRelationFilter = {
    every?: JoinRequestWhereInput
    some?: JoinRequestWhereInput
    none?: JoinRequestWhereInput
  }

  export type FeedMessageListRelationFilter = {
    every?: FeedMessageWhereInput
    some?: FeedMessageWhereInput
    none?: FeedMessageWhereInput
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JoinRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeedMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    subject?: SortOrder
    meetingFrequency?: SortOrder
    minMembers?: SortOrder
    maxMembers?: SortOrder
    isPrivate?: SortOrder
    profanityFilter?: SortOrder
    createdAt?: SortOrder
    leaderId?: SortOrder
  }

  export type GroupAvgOrderByAggregateInput = {
    minMembers?: SortOrder
    maxMembers?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    subject?: SortOrder
    meetingFrequency?: SortOrder
    minMembers?: SortOrder
    maxMembers?: SortOrder
    isPrivate?: SortOrder
    profanityFilter?: SortOrder
    createdAt?: SortOrder
    leaderId?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    subject?: SortOrder
    meetingFrequency?: SortOrder
    minMembers?: SortOrder
    maxMembers?: SortOrder
    isPrivate?: SortOrder
    profanityFilter?: SortOrder
    createdAt?: SortOrder
    leaderId?: SortOrder
  }

  export type GroupSumOrderByAggregateInput = {
    minMembers?: SortOrder
    maxMembers?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type GroupMemberGroupIdUserIdCompoundUniqueInput = {
    groupId: string
    userId: string
  }

  export type GroupMemberCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type GroupMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type GroupMemberMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type JoinRequestGroupIdUserIdCompoundUniqueInput = {
    groupId: string
    userId: string
  }

  export type JoinRequestCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type JoinRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type JoinRequestMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedMessageCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedMessageMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupCreateNestedManyWithoutLeaderInput = {
    create?: XOR<GroupCreateWithoutLeaderInput, GroupUncheckedCreateWithoutLeaderInput> | GroupCreateWithoutLeaderInput[] | GroupUncheckedCreateWithoutLeaderInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutLeaderInput | GroupCreateOrConnectWithoutLeaderInput[]
    createMany?: GroupCreateManyLeaderInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type GroupMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type JoinRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<JoinRequestCreateWithoutUserInput, JoinRequestUncheckedCreateWithoutUserInput> | JoinRequestCreateWithoutUserInput[] | JoinRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutUserInput | JoinRequestCreateOrConnectWithoutUserInput[]
    createMany?: JoinRequestCreateManyUserInputEnvelope
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
  }

  export type FeedMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<FeedMessageCreateWithoutUserInput, FeedMessageUncheckedCreateWithoutUserInput> | FeedMessageCreateWithoutUserInput[] | FeedMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedMessageCreateOrConnectWithoutUserInput | FeedMessageCreateOrConnectWithoutUserInput[]
    createMany?: FeedMessageCreateManyUserInputEnvelope
    connect?: FeedMessageWhereUniqueInput | FeedMessageWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutLeaderInput = {
    create?: XOR<GroupCreateWithoutLeaderInput, GroupUncheckedCreateWithoutLeaderInput> | GroupCreateWithoutLeaderInput[] | GroupUncheckedCreateWithoutLeaderInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutLeaderInput | GroupCreateOrConnectWithoutLeaderInput[]
    createMany?: GroupCreateManyLeaderInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type JoinRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<JoinRequestCreateWithoutUserInput, JoinRequestUncheckedCreateWithoutUserInput> | JoinRequestCreateWithoutUserInput[] | JoinRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutUserInput | JoinRequestCreateOrConnectWithoutUserInput[]
    createMany?: JoinRequestCreateManyUserInputEnvelope
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
  }

  export type FeedMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FeedMessageCreateWithoutUserInput, FeedMessageUncheckedCreateWithoutUserInput> | FeedMessageCreateWithoutUserInput[] | FeedMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedMessageCreateOrConnectWithoutUserInput | FeedMessageCreateOrConnectWithoutUserInput[]
    createMany?: FeedMessageCreateManyUserInputEnvelope
    connect?: FeedMessageWhereUniqueInput | FeedMessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GroupUpdateManyWithoutLeaderNestedInput = {
    create?: XOR<GroupCreateWithoutLeaderInput, GroupUncheckedCreateWithoutLeaderInput> | GroupCreateWithoutLeaderInput[] | GroupUncheckedCreateWithoutLeaderInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutLeaderInput | GroupCreateOrConnectWithoutLeaderInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutLeaderInput | GroupUpsertWithWhereUniqueWithoutLeaderInput[]
    createMany?: GroupCreateManyLeaderInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutLeaderInput | GroupUpdateWithWhereUniqueWithoutLeaderInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutLeaderInput | GroupUpdateManyWithWhereWithoutLeaderInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type GroupMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutUserInput | GroupMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutUserInput | GroupMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutUserInput | GroupMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type JoinRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<JoinRequestCreateWithoutUserInput, JoinRequestUncheckedCreateWithoutUserInput> | JoinRequestCreateWithoutUserInput[] | JoinRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutUserInput | JoinRequestCreateOrConnectWithoutUserInput[]
    upsert?: JoinRequestUpsertWithWhereUniqueWithoutUserInput | JoinRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JoinRequestCreateManyUserInputEnvelope
    set?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    disconnect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    delete?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    update?: JoinRequestUpdateWithWhereUniqueWithoutUserInput | JoinRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JoinRequestUpdateManyWithWhereWithoutUserInput | JoinRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
  }

  export type FeedMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeedMessageCreateWithoutUserInput, FeedMessageUncheckedCreateWithoutUserInput> | FeedMessageCreateWithoutUserInput[] | FeedMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedMessageCreateOrConnectWithoutUserInput | FeedMessageCreateOrConnectWithoutUserInput[]
    upsert?: FeedMessageUpsertWithWhereUniqueWithoutUserInput | FeedMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeedMessageCreateManyUserInputEnvelope
    set?: FeedMessageWhereUniqueInput | FeedMessageWhereUniqueInput[]
    disconnect?: FeedMessageWhereUniqueInput | FeedMessageWhereUniqueInput[]
    delete?: FeedMessageWhereUniqueInput | FeedMessageWhereUniqueInput[]
    connect?: FeedMessageWhereUniqueInput | FeedMessageWhereUniqueInput[]
    update?: FeedMessageUpdateWithWhereUniqueWithoutUserInput | FeedMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeedMessageUpdateManyWithWhereWithoutUserInput | FeedMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeedMessageScalarWhereInput | FeedMessageScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutLeaderNestedInput = {
    create?: XOR<GroupCreateWithoutLeaderInput, GroupUncheckedCreateWithoutLeaderInput> | GroupCreateWithoutLeaderInput[] | GroupUncheckedCreateWithoutLeaderInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutLeaderInput | GroupCreateOrConnectWithoutLeaderInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutLeaderInput | GroupUpsertWithWhereUniqueWithoutLeaderInput[]
    createMany?: GroupCreateManyLeaderInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutLeaderInput | GroupUpdateWithWhereUniqueWithoutLeaderInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutLeaderInput | GroupUpdateManyWithWhereWithoutLeaderInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type GroupMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutUserInput | GroupMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutUserInput | GroupMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutUserInput | GroupMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type JoinRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<JoinRequestCreateWithoutUserInput, JoinRequestUncheckedCreateWithoutUserInput> | JoinRequestCreateWithoutUserInput[] | JoinRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutUserInput | JoinRequestCreateOrConnectWithoutUserInput[]
    upsert?: JoinRequestUpsertWithWhereUniqueWithoutUserInput | JoinRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JoinRequestCreateManyUserInputEnvelope
    set?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    disconnect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    delete?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    update?: JoinRequestUpdateWithWhereUniqueWithoutUserInput | JoinRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JoinRequestUpdateManyWithWhereWithoutUserInput | JoinRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
  }

  export type FeedMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeedMessageCreateWithoutUserInput, FeedMessageUncheckedCreateWithoutUserInput> | FeedMessageCreateWithoutUserInput[] | FeedMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedMessageCreateOrConnectWithoutUserInput | FeedMessageCreateOrConnectWithoutUserInput[]
    upsert?: FeedMessageUpsertWithWhereUniqueWithoutUserInput | FeedMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeedMessageCreateManyUserInputEnvelope
    set?: FeedMessageWhereUniqueInput | FeedMessageWhereUniqueInput[]
    disconnect?: FeedMessageWhereUniqueInput | FeedMessageWhereUniqueInput[]
    delete?: FeedMessageWhereUniqueInput | FeedMessageWhereUniqueInput[]
    connect?: FeedMessageWhereUniqueInput | FeedMessageWhereUniqueInput[]
    update?: FeedMessageUpdateWithWhereUniqueWithoutUserInput | FeedMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeedMessageUpdateManyWithWhereWithoutUserInput | FeedMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeedMessageScalarWhereInput | FeedMessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLedGroupsInput = {
    create?: XOR<UserCreateWithoutLedGroupsInput, UserUncheckedCreateWithoutLedGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLedGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupMemberCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type JoinRequestCreateNestedManyWithoutGroupInput = {
    create?: XOR<JoinRequestCreateWithoutGroupInput, JoinRequestUncheckedCreateWithoutGroupInput> | JoinRequestCreateWithoutGroupInput[] | JoinRequestUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutGroupInput | JoinRequestCreateOrConnectWithoutGroupInput[]
    createMany?: JoinRequestCreateManyGroupInputEnvelope
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
  }

  export type FeedMessageCreateNestedManyWithoutGroupInput = {
    create?: XOR<FeedMessageCreateWithoutGroupInput, FeedMessageUncheckedCreateWithoutGroupInput> | FeedMessageCreateWithoutGroupInput[] | FeedMessageUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: FeedMessageCreateOrConnectWithoutGroupInput | FeedMessageCreateOrConnectWithoutGroupInput[]
    createMany?: FeedMessageCreateManyGroupInputEnvelope
    connect?: FeedMessageWhereUniqueInput | FeedMessageWhereUniqueInput[]
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type JoinRequestUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<JoinRequestCreateWithoutGroupInput, JoinRequestUncheckedCreateWithoutGroupInput> | JoinRequestCreateWithoutGroupInput[] | JoinRequestUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutGroupInput | JoinRequestCreateOrConnectWithoutGroupInput[]
    createMany?: JoinRequestCreateManyGroupInputEnvelope
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
  }

  export type FeedMessageUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<FeedMessageCreateWithoutGroupInput, FeedMessageUncheckedCreateWithoutGroupInput> | FeedMessageCreateWithoutGroupInput[] | FeedMessageUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: FeedMessageCreateOrConnectWithoutGroupInput | FeedMessageCreateOrConnectWithoutGroupInput[]
    createMany?: FeedMessageCreateManyGroupInputEnvelope
    connect?: FeedMessageWhereUniqueInput | FeedMessageWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutLedGroupsNestedInput = {
    create?: XOR<UserCreateWithoutLedGroupsInput, UserUncheckedCreateWithoutLedGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLedGroupsInput
    upsert?: UserUpsertWithoutLedGroupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLedGroupsInput, UserUpdateWithoutLedGroupsInput>, UserUncheckedUpdateWithoutLedGroupsInput>
  }

  export type GroupMemberUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutGroupInput | GroupMemberUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutGroupInput | GroupMemberUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutGroupInput | GroupMemberUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type JoinRequestUpdateManyWithoutGroupNestedInput = {
    create?: XOR<JoinRequestCreateWithoutGroupInput, JoinRequestUncheckedCreateWithoutGroupInput> | JoinRequestCreateWithoutGroupInput[] | JoinRequestUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutGroupInput | JoinRequestCreateOrConnectWithoutGroupInput[]
    upsert?: JoinRequestUpsertWithWhereUniqueWithoutGroupInput | JoinRequestUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: JoinRequestCreateManyGroupInputEnvelope
    set?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    disconnect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    delete?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    update?: JoinRequestUpdateWithWhereUniqueWithoutGroupInput | JoinRequestUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: JoinRequestUpdateManyWithWhereWithoutGroupInput | JoinRequestUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
  }

  export type FeedMessageUpdateManyWithoutGroupNestedInput = {
    create?: XOR<FeedMessageCreateWithoutGroupInput, FeedMessageUncheckedCreateWithoutGroupInput> | FeedMessageCreateWithoutGroupInput[] | FeedMessageUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: FeedMessageCreateOrConnectWithoutGroupInput | FeedMessageCreateOrConnectWithoutGroupInput[]
    upsert?: FeedMessageUpsertWithWhereUniqueWithoutGroupInput | FeedMessageUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: FeedMessageCreateManyGroupInputEnvelope
    set?: FeedMessageWhereUniqueInput | FeedMessageWhereUniqueInput[]
    disconnect?: FeedMessageWhereUniqueInput | FeedMessageWhereUniqueInput[]
    delete?: FeedMessageWhereUniqueInput | FeedMessageWhereUniqueInput[]
    connect?: FeedMessageWhereUniqueInput | FeedMessageWhereUniqueInput[]
    update?: FeedMessageUpdateWithWhereUniqueWithoutGroupInput | FeedMessageUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: FeedMessageUpdateManyWithWhereWithoutGroupInput | FeedMessageUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: FeedMessageScalarWhereInput | FeedMessageScalarWhereInput[]
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutGroupInput | GroupMemberUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutGroupInput | GroupMemberUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutGroupInput | GroupMemberUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type JoinRequestUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<JoinRequestCreateWithoutGroupInput, JoinRequestUncheckedCreateWithoutGroupInput> | JoinRequestCreateWithoutGroupInput[] | JoinRequestUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutGroupInput | JoinRequestCreateOrConnectWithoutGroupInput[]
    upsert?: JoinRequestUpsertWithWhereUniqueWithoutGroupInput | JoinRequestUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: JoinRequestCreateManyGroupInputEnvelope
    set?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    disconnect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    delete?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    update?: JoinRequestUpdateWithWhereUniqueWithoutGroupInput | JoinRequestUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: JoinRequestUpdateManyWithWhereWithoutGroupInput | JoinRequestUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
  }

  export type FeedMessageUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<FeedMessageCreateWithoutGroupInput, FeedMessageUncheckedCreateWithoutGroupInput> | FeedMessageCreateWithoutGroupInput[] | FeedMessageUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: FeedMessageCreateOrConnectWithoutGroupInput | FeedMessageCreateOrConnectWithoutGroupInput[]
    upsert?: FeedMessageUpsertWithWhereUniqueWithoutGroupInput | FeedMessageUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: FeedMessageCreateManyGroupInputEnvelope
    set?: FeedMessageWhereUniqueInput | FeedMessageWhereUniqueInput[]
    disconnect?: FeedMessageWhereUniqueInput | FeedMessageWhereUniqueInput[]
    delete?: FeedMessageWhereUniqueInput | FeedMessageWhereUniqueInput[]
    connect?: FeedMessageWhereUniqueInput | FeedMessageWhereUniqueInput[]
    update?: FeedMessageUpdateWithWhereUniqueWithoutGroupInput | FeedMessageUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: FeedMessageUpdateManyWithWhereWithoutGroupInput | FeedMessageUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: FeedMessageScalarWhereInput | FeedMessageScalarWhereInput[]
  }

  export type GroupCreateNestedOneWithoutMembersInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    connect?: GroupWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    upsert?: GroupUpsertWithoutMembersInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutMembersInput, GroupUpdateWithoutMembersInput>, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    upsert?: UserUpsertWithoutMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipsInput, UserUpdateWithoutMembershipsInput>, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type GroupCreateNestedOneWithoutRequestsInput = {
    create?: XOR<GroupCreateWithoutRequestsInput, GroupUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutRequestsInput
    connect?: GroupWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRequestsInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<GroupCreateWithoutRequestsInput, GroupUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutRequestsInput
    upsert?: GroupUpsertWithoutRequestsInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutRequestsInput, GroupUpdateWithoutRequestsInput>, GroupUncheckedUpdateWithoutRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    upsert?: UserUpsertWithoutRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequestsInput, UserUpdateWithoutRequestsInput>, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type GroupCreateNestedOneWithoutFeedMessagesInput = {
    create?: XOR<GroupCreateWithoutFeedMessagesInput, GroupUncheckedCreateWithoutFeedMessagesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutFeedMessagesInput
    connect?: GroupWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFeedMessagesInput = {
    create?: XOR<UserCreateWithoutFeedMessagesInput, UserUncheckedCreateWithoutFeedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type GroupUpdateOneRequiredWithoutFeedMessagesNestedInput = {
    create?: XOR<GroupCreateWithoutFeedMessagesInput, GroupUncheckedCreateWithoutFeedMessagesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutFeedMessagesInput
    upsert?: GroupUpsertWithoutFeedMessagesInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutFeedMessagesInput, GroupUpdateWithoutFeedMessagesInput>, GroupUncheckedUpdateWithoutFeedMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutFeedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutFeedMessagesInput, UserUncheckedCreateWithoutFeedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedMessagesInput
    upsert?: UserUpsertWithoutFeedMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFeedMessagesInput, UserUpdateWithoutFeedMessagesInput>, UserUncheckedUpdateWithoutFeedMessagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GroupCreateWithoutLeaderInput = {
    id?: string
    name: string
    description: string
    subject: string
    meetingFrequency: string
    minMembers: number
    maxMembers: number
    isPrivate?: boolean
    profanityFilter?: boolean
    createdAt?: Date | string
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    requests?: JoinRequestCreateNestedManyWithoutGroupInput
    feedMessages?: FeedMessageCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutLeaderInput = {
    id?: string
    name: string
    description: string
    subject: string
    meetingFrequency: string
    minMembers: number
    maxMembers: number
    isPrivate?: boolean
    profanityFilter?: boolean
    createdAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    requests?: JoinRequestUncheckedCreateNestedManyWithoutGroupInput
    feedMessages?: FeedMessageUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutLeaderInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutLeaderInput, GroupUncheckedCreateWithoutLeaderInput>
  }

  export type GroupCreateManyLeaderInputEnvelope = {
    data: GroupCreateManyLeaderInput | GroupCreateManyLeaderInput[]
  }

  export type GroupMemberCreateWithoutUserInput = {
    id?: string
    joinedAt?: Date | string
    group: GroupCreateNestedOneWithoutMembersInput
  }

  export type GroupMemberUncheckedCreateWithoutUserInput = {
    id?: string
    groupId: string
    joinedAt?: Date | string
  }

  export type GroupMemberCreateOrConnectWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput>
  }

  export type GroupMemberCreateManyUserInputEnvelope = {
    data: GroupMemberCreateManyUserInput | GroupMemberCreateManyUserInput[]
  }

  export type JoinRequestCreateWithoutUserInput = {
    id?: string
    status: string
    createdAt?: Date | string
    group: GroupCreateNestedOneWithoutRequestsInput
  }

  export type JoinRequestUncheckedCreateWithoutUserInput = {
    id?: string
    groupId: string
    status: string
    createdAt?: Date | string
  }

  export type JoinRequestCreateOrConnectWithoutUserInput = {
    where: JoinRequestWhereUniqueInput
    create: XOR<JoinRequestCreateWithoutUserInput, JoinRequestUncheckedCreateWithoutUserInput>
  }

  export type JoinRequestCreateManyUserInputEnvelope = {
    data: JoinRequestCreateManyUserInput | JoinRequestCreateManyUserInput[]
  }

  export type FeedMessageCreateWithoutUserInput = {
    id?: string
    content: string
    fileUrl?: string | null
    fileName?: string | null
    createdAt?: Date | string
    group: GroupCreateNestedOneWithoutFeedMessagesInput
  }

  export type FeedMessageUncheckedCreateWithoutUserInput = {
    id?: string
    groupId: string
    content: string
    fileUrl?: string | null
    fileName?: string | null
    createdAt?: Date | string
  }

  export type FeedMessageCreateOrConnectWithoutUserInput = {
    where: FeedMessageWhereUniqueInput
    create: XOR<FeedMessageCreateWithoutUserInput, FeedMessageUncheckedCreateWithoutUserInput>
  }

  export type FeedMessageCreateManyUserInputEnvelope = {
    data: FeedMessageCreateManyUserInput | FeedMessageCreateManyUserInput[]
  }

  export type GroupUpsertWithWhereUniqueWithoutLeaderInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutLeaderInput, GroupUncheckedUpdateWithoutLeaderInput>
    create: XOR<GroupCreateWithoutLeaderInput, GroupUncheckedCreateWithoutLeaderInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutLeaderInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutLeaderInput, GroupUncheckedUpdateWithoutLeaderInput>
  }

  export type GroupUpdateManyWithWhereWithoutLeaderInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutLeaderInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    description?: StringFilter<"Group"> | string
    subject?: StringFilter<"Group"> | string
    meetingFrequency?: StringFilter<"Group"> | string
    minMembers?: IntFilter<"Group"> | number
    maxMembers?: IntFilter<"Group"> | number
    isPrivate?: BoolFilter<"Group"> | boolean
    profanityFilter?: BoolFilter<"Group"> | boolean
    createdAt?: DateTimeFilter<"Group"> | Date | string
    leaderId?: StringFilter<"Group"> | string
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutUserInput, GroupMemberUncheckedUpdateWithoutUserInput>
    create: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutUserInput, GroupMemberUncheckedUpdateWithoutUserInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutUserInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type GroupMemberScalarWhereInput = {
    AND?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    OR?: GroupMemberScalarWhereInput[]
    NOT?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    id?: StringFilter<"GroupMember"> | string
    groupId?: StringFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
    joinedAt?: DateTimeFilter<"GroupMember"> | Date | string
  }

  export type JoinRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: JoinRequestWhereUniqueInput
    update: XOR<JoinRequestUpdateWithoutUserInput, JoinRequestUncheckedUpdateWithoutUserInput>
    create: XOR<JoinRequestCreateWithoutUserInput, JoinRequestUncheckedCreateWithoutUserInput>
  }

  export type JoinRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: JoinRequestWhereUniqueInput
    data: XOR<JoinRequestUpdateWithoutUserInput, JoinRequestUncheckedUpdateWithoutUserInput>
  }

  export type JoinRequestUpdateManyWithWhereWithoutUserInput = {
    where: JoinRequestScalarWhereInput
    data: XOR<JoinRequestUpdateManyMutationInput, JoinRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type JoinRequestScalarWhereInput = {
    AND?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
    OR?: JoinRequestScalarWhereInput[]
    NOT?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
    id?: StringFilter<"JoinRequest"> | string
    groupId?: StringFilter<"JoinRequest"> | string
    userId?: StringFilter<"JoinRequest"> | string
    status?: StringFilter<"JoinRequest"> | string
    createdAt?: DateTimeFilter<"JoinRequest"> | Date | string
  }

  export type FeedMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: FeedMessageWhereUniqueInput
    update: XOR<FeedMessageUpdateWithoutUserInput, FeedMessageUncheckedUpdateWithoutUserInput>
    create: XOR<FeedMessageCreateWithoutUserInput, FeedMessageUncheckedCreateWithoutUserInput>
  }

  export type FeedMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: FeedMessageWhereUniqueInput
    data: XOR<FeedMessageUpdateWithoutUserInput, FeedMessageUncheckedUpdateWithoutUserInput>
  }

  export type FeedMessageUpdateManyWithWhereWithoutUserInput = {
    where: FeedMessageScalarWhereInput
    data: XOR<FeedMessageUpdateManyMutationInput, FeedMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type FeedMessageScalarWhereInput = {
    AND?: FeedMessageScalarWhereInput | FeedMessageScalarWhereInput[]
    OR?: FeedMessageScalarWhereInput[]
    NOT?: FeedMessageScalarWhereInput | FeedMessageScalarWhereInput[]
    id?: StringFilter<"FeedMessage"> | string
    groupId?: StringFilter<"FeedMessage"> | string
    userId?: StringFilter<"FeedMessage"> | string
    content?: StringFilter<"FeedMessage"> | string
    fileUrl?: StringNullableFilter<"FeedMessage"> | string | null
    fileName?: StringNullableFilter<"FeedMessage"> | string | null
    createdAt?: DateTimeFilter<"FeedMessage"> | Date | string
  }

  export type UserCreateWithoutLedGroupsInput = {
    id?: string
    email: string
    name: string
    avatarUrl?: string | null
    role?: string
    password?: string
    createdAt?: Date | string
    memberships?: GroupMemberCreateNestedManyWithoutUserInput
    requests?: JoinRequestCreateNestedManyWithoutUserInput
    feedMessages?: FeedMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLedGroupsInput = {
    id?: string
    email: string
    name: string
    avatarUrl?: string | null
    role?: string
    password?: string
    createdAt?: Date | string
    memberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    requests?: JoinRequestUncheckedCreateNestedManyWithoutUserInput
    feedMessages?: FeedMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLedGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLedGroupsInput, UserUncheckedCreateWithoutLedGroupsInput>
  }

  export type GroupMemberCreateWithoutGroupInput = {
    id?: string
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type GroupMemberUncheckedCreateWithoutGroupInput = {
    id?: string
    userId: string
    joinedAt?: Date | string
  }

  export type GroupMemberCreateOrConnectWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberCreateManyGroupInputEnvelope = {
    data: GroupMemberCreateManyGroupInput | GroupMemberCreateManyGroupInput[]
  }

  export type JoinRequestCreateWithoutGroupInput = {
    id?: string
    status: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRequestsInput
  }

  export type JoinRequestUncheckedCreateWithoutGroupInput = {
    id?: string
    userId: string
    status: string
    createdAt?: Date | string
  }

  export type JoinRequestCreateOrConnectWithoutGroupInput = {
    where: JoinRequestWhereUniqueInput
    create: XOR<JoinRequestCreateWithoutGroupInput, JoinRequestUncheckedCreateWithoutGroupInput>
  }

  export type JoinRequestCreateManyGroupInputEnvelope = {
    data: JoinRequestCreateManyGroupInput | JoinRequestCreateManyGroupInput[]
  }

  export type FeedMessageCreateWithoutGroupInput = {
    id?: string
    content: string
    fileUrl?: string | null
    fileName?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFeedMessagesInput
  }

  export type FeedMessageUncheckedCreateWithoutGroupInput = {
    id?: string
    userId: string
    content: string
    fileUrl?: string | null
    fileName?: string | null
    createdAt?: Date | string
  }

  export type FeedMessageCreateOrConnectWithoutGroupInput = {
    where: FeedMessageWhereUniqueInput
    create: XOR<FeedMessageCreateWithoutGroupInput, FeedMessageUncheckedCreateWithoutGroupInput>
  }

  export type FeedMessageCreateManyGroupInputEnvelope = {
    data: FeedMessageCreateManyGroupInput | FeedMessageCreateManyGroupInput[]
  }

  export type UserUpsertWithoutLedGroupsInput = {
    update: XOR<UserUpdateWithoutLedGroupsInput, UserUncheckedUpdateWithoutLedGroupsInput>
    create: XOR<UserCreateWithoutLedGroupsInput, UserUncheckedCreateWithoutLedGroupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLedGroupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLedGroupsInput, UserUncheckedUpdateWithoutLedGroupsInput>
  }

  export type UserUpdateWithoutLedGroupsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: GroupMemberUpdateManyWithoutUserNestedInput
    requests?: JoinRequestUpdateManyWithoutUserNestedInput
    feedMessages?: FeedMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLedGroupsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    requests?: JoinRequestUncheckedUpdateManyWithoutUserNestedInput
    feedMessages?: FeedMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutGroupInput, GroupMemberUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutGroupInput, GroupMemberUncheckedUpdateWithoutGroupInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutGroupInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutGroupInput>
  }

  export type JoinRequestUpsertWithWhereUniqueWithoutGroupInput = {
    where: JoinRequestWhereUniqueInput
    update: XOR<JoinRequestUpdateWithoutGroupInput, JoinRequestUncheckedUpdateWithoutGroupInput>
    create: XOR<JoinRequestCreateWithoutGroupInput, JoinRequestUncheckedCreateWithoutGroupInput>
  }

  export type JoinRequestUpdateWithWhereUniqueWithoutGroupInput = {
    where: JoinRequestWhereUniqueInput
    data: XOR<JoinRequestUpdateWithoutGroupInput, JoinRequestUncheckedUpdateWithoutGroupInput>
  }

  export type JoinRequestUpdateManyWithWhereWithoutGroupInput = {
    where: JoinRequestScalarWhereInput
    data: XOR<JoinRequestUpdateManyMutationInput, JoinRequestUncheckedUpdateManyWithoutGroupInput>
  }

  export type FeedMessageUpsertWithWhereUniqueWithoutGroupInput = {
    where: FeedMessageWhereUniqueInput
    update: XOR<FeedMessageUpdateWithoutGroupInput, FeedMessageUncheckedUpdateWithoutGroupInput>
    create: XOR<FeedMessageCreateWithoutGroupInput, FeedMessageUncheckedCreateWithoutGroupInput>
  }

  export type FeedMessageUpdateWithWhereUniqueWithoutGroupInput = {
    where: FeedMessageWhereUniqueInput
    data: XOR<FeedMessageUpdateWithoutGroupInput, FeedMessageUncheckedUpdateWithoutGroupInput>
  }

  export type FeedMessageUpdateManyWithWhereWithoutGroupInput = {
    where: FeedMessageScalarWhereInput
    data: XOR<FeedMessageUpdateManyMutationInput, FeedMessageUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupCreateWithoutMembersInput = {
    id?: string
    name: string
    description: string
    subject: string
    meetingFrequency: string
    minMembers: number
    maxMembers: number
    isPrivate?: boolean
    profanityFilter?: boolean
    createdAt?: Date | string
    leader: UserCreateNestedOneWithoutLedGroupsInput
    requests?: JoinRequestCreateNestedManyWithoutGroupInput
    feedMessages?: FeedMessageCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    description: string
    subject: string
    meetingFrequency: string
    minMembers: number
    maxMembers: number
    isPrivate?: boolean
    profanityFilter?: boolean
    createdAt?: Date | string
    leaderId: string
    requests?: JoinRequestUncheckedCreateNestedManyWithoutGroupInput
    feedMessages?: FeedMessageUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutMembersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutMembershipsInput = {
    id?: string
    email: string
    name: string
    avatarUrl?: string | null
    role?: string
    password?: string
    createdAt?: Date | string
    ledGroups?: GroupCreateNestedManyWithoutLeaderInput
    requests?: JoinRequestCreateNestedManyWithoutUserInput
    feedMessages?: FeedMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: string
    email: string
    name: string
    avatarUrl?: string | null
    role?: string
    password?: string
    createdAt?: Date | string
    ledGroups?: GroupUncheckedCreateNestedManyWithoutLeaderInput
    requests?: JoinRequestUncheckedCreateNestedManyWithoutUserInput
    feedMessages?: FeedMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type GroupUpsertWithoutMembersInput = {
    update: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutMembersInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type GroupUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    meetingFrequency?: StringFieldUpdateOperationsInput | string
    minMembers?: IntFieldUpdateOperationsInput | number
    maxMembers?: IntFieldUpdateOperationsInput | number
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    profanityFilter?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leader?: UserUpdateOneRequiredWithoutLedGroupsNestedInput
    requests?: JoinRequestUpdateManyWithoutGroupNestedInput
    feedMessages?: FeedMessageUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    meetingFrequency?: StringFieldUpdateOperationsInput | string
    minMembers?: IntFieldUpdateOperationsInput | number
    maxMembers?: IntFieldUpdateOperationsInput | number
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    profanityFilter?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaderId?: StringFieldUpdateOperationsInput | string
    requests?: JoinRequestUncheckedUpdateManyWithoutGroupNestedInput
    feedMessages?: FeedMessageUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserUpdateWithoutMembershipsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledGroups?: GroupUpdateManyWithoutLeaderNestedInput
    requests?: JoinRequestUpdateManyWithoutUserNestedInput
    feedMessages?: FeedMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledGroups?: GroupUncheckedUpdateManyWithoutLeaderNestedInput
    requests?: JoinRequestUncheckedUpdateManyWithoutUserNestedInput
    feedMessages?: FeedMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupCreateWithoutRequestsInput = {
    id?: string
    name: string
    description: string
    subject: string
    meetingFrequency: string
    minMembers: number
    maxMembers: number
    isPrivate?: boolean
    profanityFilter?: boolean
    createdAt?: Date | string
    leader: UserCreateNestedOneWithoutLedGroupsInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    feedMessages?: FeedMessageCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutRequestsInput = {
    id?: string
    name: string
    description: string
    subject: string
    meetingFrequency: string
    minMembers: number
    maxMembers: number
    isPrivate?: boolean
    profanityFilter?: boolean
    createdAt?: Date | string
    leaderId: string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    feedMessages?: FeedMessageUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutRequestsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutRequestsInput, GroupUncheckedCreateWithoutRequestsInput>
  }

  export type UserCreateWithoutRequestsInput = {
    id?: string
    email: string
    name: string
    avatarUrl?: string | null
    role?: string
    password?: string
    createdAt?: Date | string
    ledGroups?: GroupCreateNestedManyWithoutLeaderInput
    memberships?: GroupMemberCreateNestedManyWithoutUserInput
    feedMessages?: FeedMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRequestsInput = {
    id?: string
    email: string
    name: string
    avatarUrl?: string | null
    role?: string
    password?: string
    createdAt?: Date | string
    ledGroups?: GroupUncheckedCreateNestedManyWithoutLeaderInput
    memberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    feedMessages?: FeedMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
  }

  export type GroupUpsertWithoutRequestsInput = {
    update: XOR<GroupUpdateWithoutRequestsInput, GroupUncheckedUpdateWithoutRequestsInput>
    create: XOR<GroupCreateWithoutRequestsInput, GroupUncheckedCreateWithoutRequestsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutRequestsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutRequestsInput, GroupUncheckedUpdateWithoutRequestsInput>
  }

  export type GroupUpdateWithoutRequestsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    meetingFrequency?: StringFieldUpdateOperationsInput | string
    minMembers?: IntFieldUpdateOperationsInput | number
    maxMembers?: IntFieldUpdateOperationsInput | number
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    profanityFilter?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leader?: UserUpdateOneRequiredWithoutLedGroupsNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    feedMessages?: FeedMessageUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutRequestsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    meetingFrequency?: StringFieldUpdateOperationsInput | string
    minMembers?: IntFieldUpdateOperationsInput | number
    maxMembers?: IntFieldUpdateOperationsInput | number
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    profanityFilter?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaderId?: StringFieldUpdateOperationsInput | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    feedMessages?: FeedMessageUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserUpsertWithoutRequestsInput = {
    update: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type UserUpdateWithoutRequestsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledGroups?: GroupUpdateManyWithoutLeaderNestedInput
    memberships?: GroupMemberUpdateManyWithoutUserNestedInput
    feedMessages?: FeedMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledGroups?: GroupUncheckedUpdateManyWithoutLeaderNestedInput
    memberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    feedMessages?: FeedMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupCreateWithoutFeedMessagesInput = {
    id?: string
    name: string
    description: string
    subject: string
    meetingFrequency: string
    minMembers: number
    maxMembers: number
    isPrivate?: boolean
    profanityFilter?: boolean
    createdAt?: Date | string
    leader: UserCreateNestedOneWithoutLedGroupsInput
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    requests?: JoinRequestCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutFeedMessagesInput = {
    id?: string
    name: string
    description: string
    subject: string
    meetingFrequency: string
    minMembers: number
    maxMembers: number
    isPrivate?: boolean
    profanityFilter?: boolean
    createdAt?: Date | string
    leaderId: string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    requests?: JoinRequestUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutFeedMessagesInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutFeedMessagesInput, GroupUncheckedCreateWithoutFeedMessagesInput>
  }

  export type UserCreateWithoutFeedMessagesInput = {
    id?: string
    email: string
    name: string
    avatarUrl?: string | null
    role?: string
    password?: string
    createdAt?: Date | string
    ledGroups?: GroupCreateNestedManyWithoutLeaderInput
    memberships?: GroupMemberCreateNestedManyWithoutUserInput
    requests?: JoinRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFeedMessagesInput = {
    id?: string
    email: string
    name: string
    avatarUrl?: string | null
    role?: string
    password?: string
    createdAt?: Date | string
    ledGroups?: GroupUncheckedCreateNestedManyWithoutLeaderInput
    memberships?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    requests?: JoinRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFeedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeedMessagesInput, UserUncheckedCreateWithoutFeedMessagesInput>
  }

  export type GroupUpsertWithoutFeedMessagesInput = {
    update: XOR<GroupUpdateWithoutFeedMessagesInput, GroupUncheckedUpdateWithoutFeedMessagesInput>
    create: XOR<GroupCreateWithoutFeedMessagesInput, GroupUncheckedCreateWithoutFeedMessagesInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutFeedMessagesInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutFeedMessagesInput, GroupUncheckedUpdateWithoutFeedMessagesInput>
  }

  export type GroupUpdateWithoutFeedMessagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    meetingFrequency?: StringFieldUpdateOperationsInput | string
    minMembers?: IntFieldUpdateOperationsInput | number
    maxMembers?: IntFieldUpdateOperationsInput | number
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    profanityFilter?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leader?: UserUpdateOneRequiredWithoutLedGroupsNestedInput
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    requests?: JoinRequestUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutFeedMessagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    meetingFrequency?: StringFieldUpdateOperationsInput | string
    minMembers?: IntFieldUpdateOperationsInput | number
    maxMembers?: IntFieldUpdateOperationsInput | number
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    profanityFilter?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaderId?: StringFieldUpdateOperationsInput | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    requests?: JoinRequestUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserUpsertWithoutFeedMessagesInput = {
    update: XOR<UserUpdateWithoutFeedMessagesInput, UserUncheckedUpdateWithoutFeedMessagesInput>
    create: XOR<UserCreateWithoutFeedMessagesInput, UserUncheckedCreateWithoutFeedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFeedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFeedMessagesInput, UserUncheckedUpdateWithoutFeedMessagesInput>
  }

  export type UserUpdateWithoutFeedMessagesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledGroups?: GroupUpdateManyWithoutLeaderNestedInput
    memberships?: GroupMemberUpdateManyWithoutUserNestedInput
    requests?: JoinRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFeedMessagesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledGroups?: GroupUncheckedUpdateManyWithoutLeaderNestedInput
    memberships?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    requests?: JoinRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupCreateManyLeaderInput = {
    id?: string
    name: string
    description: string
    subject: string
    meetingFrequency: string
    minMembers: number
    maxMembers: number
    isPrivate?: boolean
    profanityFilter?: boolean
    createdAt?: Date | string
  }

  export type GroupMemberCreateManyUserInput = {
    id?: string
    groupId: string
    joinedAt?: Date | string
  }

  export type JoinRequestCreateManyUserInput = {
    id?: string
    groupId: string
    status: string
    createdAt?: Date | string
  }

  export type FeedMessageCreateManyUserInput = {
    id?: string
    groupId: string
    content: string
    fileUrl?: string | null
    fileName?: string | null
    createdAt?: Date | string
  }

  export type GroupUpdateWithoutLeaderInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    meetingFrequency?: StringFieldUpdateOperationsInput | string
    minMembers?: IntFieldUpdateOperationsInput | number
    maxMembers?: IntFieldUpdateOperationsInput | number
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    profanityFilter?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    requests?: JoinRequestUpdateManyWithoutGroupNestedInput
    feedMessages?: FeedMessageUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutLeaderInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    meetingFrequency?: StringFieldUpdateOperationsInput | string
    minMembers?: IntFieldUpdateOperationsInput | number
    maxMembers?: IntFieldUpdateOperationsInput | number
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    profanityFilter?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    requests?: JoinRequestUncheckedUpdateManyWithoutGroupNestedInput
    feedMessages?: FeedMessageUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutLeaderInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    meetingFrequency?: StringFieldUpdateOperationsInput | string
    minMembers?: IntFieldUpdateOperationsInput | number
    maxMembers?: IntFieldUpdateOperationsInput | number
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    profanityFilter?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUpdateWithoutUserInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutUserInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUncheckedUpdateManyWithoutUserInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinRequestUpdateWithoutUserInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type JoinRequestUncheckedUpdateWithoutUserInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinRequestUncheckedUpdateManyWithoutUserInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedMessageUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutFeedMessagesNestedInput
  }

  export type FeedMessageUncheckedUpdateWithoutUserInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedMessageUncheckedUpdateManyWithoutUserInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberCreateManyGroupInput = {
    id?: string
    userId: string
    joinedAt?: Date | string
  }

  export type JoinRequestCreateManyGroupInput = {
    id?: string
    userId: string
    status: string
    createdAt?: Date | string
  }

  export type FeedMessageCreateManyGroupInput = {
    id?: string
    userId: string
    content: string
    fileUrl?: string | null
    fileName?: string | null
    createdAt?: Date | string
  }

  export type GroupMemberUpdateWithoutGroupInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutGroupInput = {
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupInput = {
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinRequestUpdateWithoutGroupInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type JoinRequestUncheckedUpdateWithoutGroupInput = {
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinRequestUncheckedUpdateManyWithoutGroupInput = {
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedMessageUpdateWithoutGroupInput = {
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFeedMessagesNestedInput
  }

  export type FeedMessageUncheckedUpdateWithoutGroupInput = {
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedMessageUncheckedUpdateManyWithoutGroupInput = {
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}