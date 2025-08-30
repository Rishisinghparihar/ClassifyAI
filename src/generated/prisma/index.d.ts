
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
 * Model Teacher
 * 
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>
/**
 * Model TeacherSubject
 * 
 */
export type TeacherSubject = $Result.DefaultSelection<Prisma.$TeacherSubjectPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model AttendanceToken
 * 
 */
export type AttendanceToken = $Result.DefaultSelection<Prisma.$AttendanceTokenPayload>
/**
 * Model PremiumFeature
 * 
 */
export type PremiumFeature = $Result.DefaultSelection<Prisma.$PremiumFeaturePayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model GoogleToken
 * 
 */
export type GoogleToken = $Result.DefaultSelection<Prisma.$GoogleTokenPayload>
/**
 * Model RecentActivity
 * 
 */
export type RecentActivity = $Result.DefaultSelection<Prisma.$RecentActivityPayload>
/**
 * Model SupportRequest
 * 
 */
export type SupportRequest = $Result.DefaultSelection<Prisma.$SupportRequestPayload>
/**
 * Model PlanConfig
 * 
 */
export type PlanConfig = $Result.DefaultSelection<Prisma.$PlanConfigPayload>
/**
 * Model ClassSession
 * 
 */
export type ClassSession = $Result.DefaultSelection<Prisma.$ClassSessionPayload>
/**
 * Model Subject
 * 
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>
/**
 * Model Semester
 * 
 */
export type Semester = $Result.DefaultSelection<Prisma.$SemesterPayload>
/**
 * Model Section
 * 
 */
export type Section = $Result.DefaultSelection<Prisma.$SectionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Weekday: {
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY',
  SATURDAY: 'SATURDAY',
  SUNDAY: 'SUNDAY'
};

export type Weekday = (typeof Weekday)[keyof typeof Weekday]


export const SessionStatus: {
  UPCOMING: 'UPCOMING',
  COMPLETED: 'COMPLETED'
};

export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus]


export const EventType: {
  HOLIDAY: 'HOLIDAY',
  EXAM: 'EXAM',
  EVENT: 'EVENT'
};

export type EventType = (typeof EventType)[keyof typeof EventType]


export const Role: {
  STUDENT: 'STUDENT',
  TEACHER: 'TEACHER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const PremiumFeatureType: {
  AI_CHATBOT: 'AI_CHATBOT',
  STUDY_PLAN: 'STUDY_PLAN',
  CALENDAR_SYNC: 'CALENDAR_SYNC'
};

export type PremiumFeatureType = (typeof PremiumFeatureType)[keyof typeof PremiumFeatureType]

}

export type Weekday = $Enums.Weekday

export const Weekday: typeof $Enums.Weekday

export type SessionStatus = $Enums.SessionStatus

export const SessionStatus: typeof $Enums.SessionStatus

export type EventType = $Enums.EventType

export const EventType: typeof $Enums.EventType

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type PremiumFeatureType = $Enums.PremiumFeatureType

export const PremiumFeatureType: typeof $Enums.PremiumFeatureType

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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


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
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacherSubject`: Exposes CRUD operations for the **TeacherSubject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeacherSubjects
    * const teacherSubjects = await prisma.teacherSubject.findMany()
    * ```
    */
  get teacherSubject(): Prisma.TeacherSubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendanceToken`: Exposes CRUD operations for the **AttendanceToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttendanceTokens
    * const attendanceTokens = await prisma.attendanceToken.findMany()
    * ```
    */
  get attendanceToken(): Prisma.AttendanceTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.premiumFeature`: Exposes CRUD operations for the **PremiumFeature** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PremiumFeatures
    * const premiumFeatures = await prisma.premiumFeature.findMany()
    * ```
    */
  get premiumFeature(): Prisma.PremiumFeatureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.googleToken`: Exposes CRUD operations for the **GoogleToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GoogleTokens
    * const googleTokens = await prisma.googleToken.findMany()
    * ```
    */
  get googleToken(): Prisma.GoogleTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recentActivity`: Exposes CRUD operations for the **RecentActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecentActivities
    * const recentActivities = await prisma.recentActivity.findMany()
    * ```
    */
  get recentActivity(): Prisma.RecentActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supportRequest`: Exposes CRUD operations for the **SupportRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupportRequests
    * const supportRequests = await prisma.supportRequest.findMany()
    * ```
    */
  get supportRequest(): Prisma.SupportRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.planConfig`: Exposes CRUD operations for the **PlanConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlanConfigs
    * const planConfigs = await prisma.planConfig.findMany()
    * ```
    */
  get planConfig(): Prisma.PlanConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classSession`: Exposes CRUD operations for the **ClassSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassSessions
    * const classSessions = await prisma.classSession.findMany()
    * ```
    */
  get classSession(): Prisma.ClassSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.SubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.semester`: Exposes CRUD operations for the **Semester** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Semesters
    * const semesters = await prisma.semester.findMany()
    * ```
    */
  get semester(): Prisma.SemesterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.section`: Exposes CRUD operations for the **Section** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.section.findMany()
    * ```
    */
  get section(): Prisma.SectionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
  : T extends BigInt
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
    Teacher: 'Teacher',
    TeacherSubject: 'TeacherSubject',
    Attendance: 'Attendance',
    AttendanceToken: 'AttendanceToken',
    PremiumFeature: 'PremiumFeature',
    Event: 'Event',
    GoogleToken: 'GoogleToken',
    RecentActivity: 'RecentActivity',
    SupportRequest: 'SupportRequest',
    PlanConfig: 'PlanConfig',
    ClassSession: 'ClassSession',
    Subject: 'Subject',
    Semester: 'Semester',
    Section: 'Section'
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
      modelProps: "user" | "teacher" | "teacherSubject" | "attendance" | "attendanceToken" | "premiumFeature" | "event" | "googleToken" | "recentActivity" | "supportRequest" | "planConfig" | "classSession" | "subject" | "semester" | "section"
      txIsolationLevel: Prisma.TransactionIsolationLevel
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Teacher: {
        payload: Prisma.$TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      TeacherSubject: {
        payload: Prisma.$TeacherSubjectPayload<ExtArgs>
        fields: Prisma.TeacherSubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherSubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherSubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          findFirst: {
            args: Prisma.TeacherSubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherSubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          findMany: {
            args: Prisma.TeacherSubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>[]
          }
          create: {
            args: Prisma.TeacherSubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          createMany: {
            args: Prisma.TeacherSubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherSubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>[]
          }
          delete: {
            args: Prisma.TeacherSubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          update: {
            args: Prisma.TeacherSubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          deleteMany: {
            args: Prisma.TeacherSubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherSubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherSubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>[]
          }
          upsert: {
            args: Prisma.TeacherSubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          aggregate: {
            args: Prisma.TeacherSubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacherSubject>
          }
          groupBy: {
            args: Prisma.TeacherSubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherSubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherSubjectCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherSubjectCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      AttendanceToken: {
        payload: Prisma.$AttendanceTokenPayload<ExtArgs>
        fields: Prisma.AttendanceTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceTokenPayload>
          }
          findFirst: {
            args: Prisma.AttendanceTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceTokenPayload>
          }
          findMany: {
            args: Prisma.AttendanceTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceTokenPayload>[]
          }
          create: {
            args: Prisma.AttendanceTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceTokenPayload>
          }
          createMany: {
            args: Prisma.AttendanceTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceTokenPayload>[]
          }
          delete: {
            args: Prisma.AttendanceTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceTokenPayload>
          }
          update: {
            args: Prisma.AttendanceTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceTokenPayload>
          }
          deleteMany: {
            args: Prisma.AttendanceTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceTokenPayload>[]
          }
          upsert: {
            args: Prisma.AttendanceTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceTokenPayload>
          }
          aggregate: {
            args: Prisma.AttendanceTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendanceToken>
          }
          groupBy: {
            args: Prisma.AttendanceTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceTokenCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceTokenCountAggregateOutputType> | number
          }
        }
      }
      PremiumFeature: {
        payload: Prisma.$PremiumFeaturePayload<ExtArgs>
        fields: Prisma.PremiumFeatureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PremiumFeatureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumFeaturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PremiumFeatureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumFeaturePayload>
          }
          findFirst: {
            args: Prisma.PremiumFeatureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumFeaturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PremiumFeatureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumFeaturePayload>
          }
          findMany: {
            args: Prisma.PremiumFeatureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumFeaturePayload>[]
          }
          create: {
            args: Prisma.PremiumFeatureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumFeaturePayload>
          }
          createMany: {
            args: Prisma.PremiumFeatureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PremiumFeatureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumFeaturePayload>[]
          }
          delete: {
            args: Prisma.PremiumFeatureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumFeaturePayload>
          }
          update: {
            args: Prisma.PremiumFeatureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumFeaturePayload>
          }
          deleteMany: {
            args: Prisma.PremiumFeatureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PremiumFeatureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PremiumFeatureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumFeaturePayload>[]
          }
          upsert: {
            args: Prisma.PremiumFeatureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiumFeaturePayload>
          }
          aggregate: {
            args: Prisma.PremiumFeatureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePremiumFeature>
          }
          groupBy: {
            args: Prisma.PremiumFeatureGroupByArgs<ExtArgs>
            result: $Utils.Optional<PremiumFeatureGroupByOutputType>[]
          }
          count: {
            args: Prisma.PremiumFeatureCountArgs<ExtArgs>
            result: $Utils.Optional<PremiumFeatureCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      GoogleToken: {
        payload: Prisma.$GoogleTokenPayload<ExtArgs>
        fields: Prisma.GoogleTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoogleTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoogleTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleTokenPayload>
          }
          findFirst: {
            args: Prisma.GoogleTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoogleTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleTokenPayload>
          }
          findMany: {
            args: Prisma.GoogleTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleTokenPayload>[]
          }
          create: {
            args: Prisma.GoogleTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleTokenPayload>
          }
          createMany: {
            args: Prisma.GoogleTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoogleTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleTokenPayload>[]
          }
          delete: {
            args: Prisma.GoogleTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleTokenPayload>
          }
          update: {
            args: Prisma.GoogleTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleTokenPayload>
          }
          deleteMany: {
            args: Prisma.GoogleTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoogleTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GoogleTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleTokenPayload>[]
          }
          upsert: {
            args: Prisma.GoogleTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleTokenPayload>
          }
          aggregate: {
            args: Prisma.GoogleTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoogleToken>
          }
          groupBy: {
            args: Prisma.GoogleTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoogleTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoogleTokenCountArgs<ExtArgs>
            result: $Utils.Optional<GoogleTokenCountAggregateOutputType> | number
          }
        }
      }
      RecentActivity: {
        payload: Prisma.$RecentActivityPayload<ExtArgs>
        fields: Prisma.RecentActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecentActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecentActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecentActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecentActivityPayload>
          }
          findFirst: {
            args: Prisma.RecentActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecentActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecentActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecentActivityPayload>
          }
          findMany: {
            args: Prisma.RecentActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecentActivityPayload>[]
          }
          create: {
            args: Prisma.RecentActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecentActivityPayload>
          }
          createMany: {
            args: Prisma.RecentActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecentActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecentActivityPayload>[]
          }
          delete: {
            args: Prisma.RecentActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecentActivityPayload>
          }
          update: {
            args: Prisma.RecentActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecentActivityPayload>
          }
          deleteMany: {
            args: Prisma.RecentActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecentActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecentActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecentActivityPayload>[]
          }
          upsert: {
            args: Prisma.RecentActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecentActivityPayload>
          }
          aggregate: {
            args: Prisma.RecentActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecentActivity>
          }
          groupBy: {
            args: Prisma.RecentActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecentActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecentActivityCountArgs<ExtArgs>
            result: $Utils.Optional<RecentActivityCountAggregateOutputType> | number
          }
        }
      }
      SupportRequest: {
        payload: Prisma.$SupportRequestPayload<ExtArgs>
        fields: Prisma.SupportRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupportRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupportRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportRequestPayload>
          }
          findFirst: {
            args: Prisma.SupportRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupportRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportRequestPayload>
          }
          findMany: {
            args: Prisma.SupportRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportRequestPayload>[]
          }
          create: {
            args: Prisma.SupportRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportRequestPayload>
          }
          createMany: {
            args: Prisma.SupportRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupportRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportRequestPayload>[]
          }
          delete: {
            args: Prisma.SupportRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportRequestPayload>
          }
          update: {
            args: Prisma.SupportRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportRequestPayload>
          }
          deleteMany: {
            args: Prisma.SupportRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupportRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupportRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportRequestPayload>[]
          }
          upsert: {
            args: Prisma.SupportRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportRequestPayload>
          }
          aggregate: {
            args: Prisma.SupportRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupportRequest>
          }
          groupBy: {
            args: Prisma.SupportRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupportRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupportRequestCountArgs<ExtArgs>
            result: $Utils.Optional<SupportRequestCountAggregateOutputType> | number
          }
        }
      }
      PlanConfig: {
        payload: Prisma.$PlanConfigPayload<ExtArgs>
        fields: Prisma.PlanConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanConfigPayload>
          }
          findFirst: {
            args: Prisma.PlanConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanConfigPayload>
          }
          findMany: {
            args: Prisma.PlanConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanConfigPayload>[]
          }
          create: {
            args: Prisma.PlanConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanConfigPayload>
          }
          createMany: {
            args: Prisma.PlanConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanConfigPayload>[]
          }
          delete: {
            args: Prisma.PlanConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanConfigPayload>
          }
          update: {
            args: Prisma.PlanConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanConfigPayload>
          }
          deleteMany: {
            args: Prisma.PlanConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanConfigPayload>[]
          }
          upsert: {
            args: Prisma.PlanConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanConfigPayload>
          }
          aggregate: {
            args: Prisma.PlanConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanConfig>
          }
          groupBy: {
            args: Prisma.PlanConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanConfigCountArgs<ExtArgs>
            result: $Utils.Optional<PlanConfigCountAggregateOutputType> | number
          }
        }
      }
      ClassSession: {
        payload: Prisma.$ClassSessionPayload<ExtArgs>
        fields: Prisma.ClassSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSessionPayload>
          }
          findFirst: {
            args: Prisma.ClassSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSessionPayload>
          }
          findMany: {
            args: Prisma.ClassSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSessionPayload>[]
          }
          create: {
            args: Prisma.ClassSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSessionPayload>
          }
          createMany: {
            args: Prisma.ClassSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSessionPayload>[]
          }
          delete: {
            args: Prisma.ClassSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSessionPayload>
          }
          update: {
            args: Prisma.ClassSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSessionPayload>
          }
          deleteMany: {
            args: Prisma.ClassSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSessionPayload>[]
          }
          upsert: {
            args: Prisma.ClassSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSessionPayload>
          }
          aggregate: {
            args: Prisma.ClassSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassSession>
          }
          groupBy: {
            args: Prisma.ClassSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ClassSessionCountAggregateOutputType> | number
          }
        }
      }
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>
        fields: Prisma.SubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      Semester: {
        payload: Prisma.$SemesterPayload<ExtArgs>
        fields: Prisma.SemesterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SemesterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SemesterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          findFirst: {
            args: Prisma.SemesterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SemesterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          findMany: {
            args: Prisma.SemesterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>[]
          }
          create: {
            args: Prisma.SemesterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          createMany: {
            args: Prisma.SemesterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SemesterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>[]
          }
          delete: {
            args: Prisma.SemesterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          update: {
            args: Prisma.SemesterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          deleteMany: {
            args: Prisma.SemesterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SemesterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SemesterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>[]
          }
          upsert: {
            args: Prisma.SemesterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          aggregate: {
            args: Prisma.SemesterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSemester>
          }
          groupBy: {
            args: Prisma.SemesterGroupByArgs<ExtArgs>
            result: $Utils.Optional<SemesterGroupByOutputType>[]
          }
          count: {
            args: Prisma.SemesterCountArgs<ExtArgs>
            result: $Utils.Optional<SemesterCountAggregateOutputType> | number
          }
        }
      }
      Section: {
        payload: Prisma.$SectionPayload<ExtArgs>
        fields: Prisma.SectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findFirst: {
            args: Prisma.SectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findMany: {
            args: Prisma.SectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          create: {
            args: Prisma.SectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          createMany: {
            args: Prisma.SectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          delete: {
            args: Prisma.SectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          update: {
            args: Prisma.SectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          deleteMany: {
            args: Prisma.SectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          upsert: {
            args: Prisma.SectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          aggregate: {
            args: Prisma.SectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSection>
          }
          groupBy: {
            args: Prisma.SectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionCountArgs<ExtArgs>
            result: $Utils.Optional<SectionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
      isolationLevel?: Prisma.TransactionIsolationLevel
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
    teacher?: TeacherOmit
    teacherSubject?: TeacherSubjectOmit
    attendance?: AttendanceOmit
    attendanceToken?: AttendanceTokenOmit
    premiumFeature?: PremiumFeatureOmit
    event?: EventOmit
    googleToken?: GoogleTokenOmit
    recentActivity?: RecentActivityOmit
    supportRequest?: SupportRequestOmit
    planConfig?: PlanConfigOmit
    classSession?: ClassSessionOmit
    subject?: SubjectOmit
    semester?: SemesterOmit
    section?: SectionOmit
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
    attendance: number
    premiumFeatures: number
    GoogleToken: number
    RecentActivity: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | UserCountOutputTypeCountAttendanceArgs
    premiumFeatures?: boolean | UserCountOutputTypeCountPremiumFeaturesArgs
    GoogleToken?: boolean | UserCountOutputTypeCountGoogleTokenArgs
    RecentActivity?: boolean | UserCountOutputTypeCountRecentActivityArgs
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
  export type UserCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPremiumFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PremiumFeatureWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGoogleTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoogleTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecentActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecentActivityWhereInput
  }


  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    subjects: number
    classes: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | TeacherCountOutputTypeCountSubjectsArgs
    classes?: boolean | TeacherCountOutputTypeCountClassesArgs
  }

  // Custom InputTypes
  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherSubjectWhereInput
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassSessionWhereInput
  }


  /**
   * Count Type PremiumFeatureCountOutputType
   */

  export type PremiumFeatureCountOutputType = {
    users: number
  }

  export type PremiumFeatureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | PremiumFeatureCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * PremiumFeatureCountOutputType without action
   */
  export type PremiumFeatureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumFeatureCountOutputType
     */
    select?: PremiumFeatureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PremiumFeatureCountOutputType without action
   */
  export type PremiumFeatureCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    classes: number
    teacherSubjects: number
  }

  export type SubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | SubjectCountOutputTypeCountClassesArgs
    teacherSubjects?: boolean | SubjectCountOutputTypeCountTeacherSubjectsArgs
  }

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassSessionWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountTeacherSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherSubjectWhereInput
  }


  /**
   * Count Type SemesterCountOutputType
   */

  export type SemesterCountOutputType = {
    subjects: number
  }

  export type SemesterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | SemesterCountOutputTypeCountSubjectsArgs
  }

  // Custom InputTypes
  /**
   * SemesterCountOutputType without action
   */
  export type SemesterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SemesterCountOutputType
     */
    select?: SemesterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SemesterCountOutputType without action
   */
  export type SemesterCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherSubjectWhereInput
  }


  /**
   * Count Type SectionCountOutputType
   */

  export type SectionCountOutputType = {
    subjects: number
  }

  export type SectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | SectionCountOutputTypeCountSubjectsArgs
  }

  // Custom InputTypes
  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionCountOutputType
     */
    select?: SectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherSubjectWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    year: number | null
    semester: number | null
  }

  export type UserSumAggregateOutputType = {
    year: number | null
    semester: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: $Enums.Role | null
    isPremium: boolean | null
    createdAt: Date | null
    premiumExpiresAt: Date | null
    branch: string | null
    year: number | null
    semester: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: $Enums.Role | null
    isPremium: boolean | null
    createdAt: Date | null
    premiumExpiresAt: Date | null
    branch: string | null
    year: number | null
    semester: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    role: number
    isPremium: number
    createdAt: number
    premiumExpiresAt: number
    branch: number
    year: number
    semester: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    year?: true
    semester?: true
  }

  export type UserSumAggregateInputType = {
    year?: true
    semester?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    isPremium?: true
    createdAt?: true
    premiumExpiresAt?: true
    branch?: true
    year?: true
    semester?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    isPremium?: true
    createdAt?: true
    premiumExpiresAt?: true
    branch?: true
    year?: true
    semester?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    isPremium?: true
    createdAt?: true
    premiumExpiresAt?: true
    branch?: true
    year?: true
    semester?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    role: $Enums.Role
    isPremium: boolean
    createdAt: Date
    premiumExpiresAt: Date | null
    branch: string | null
    year: number | null
    semester: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    role?: boolean
    isPremium?: boolean
    createdAt?: boolean
    premiumExpiresAt?: boolean
    branch?: boolean
    year?: boolean
    semester?: boolean
    attendance?: boolean | User$attendanceArgs<ExtArgs>
    premiumFeatures?: boolean | User$premiumFeaturesArgs<ExtArgs>
    GoogleToken?: boolean | User$GoogleTokenArgs<ExtArgs>
    RecentActivity?: boolean | User$RecentActivityArgs<ExtArgs>
    TeacherProfile?: boolean | User$TeacherProfileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    isPremium?: boolean
    createdAt?: boolean
    premiumExpiresAt?: boolean
    branch?: boolean
    year?: boolean
    semester?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    isPremium?: boolean
    createdAt?: boolean
    premiumExpiresAt?: boolean
    branch?: boolean
    year?: boolean
    semester?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    isPremium?: boolean
    createdAt?: boolean
    premiumExpiresAt?: boolean
    branch?: boolean
    year?: boolean
    semester?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "role" | "isPremium" | "createdAt" | "premiumExpiresAt" | "branch" | "year" | "semester", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | User$attendanceArgs<ExtArgs>
    premiumFeatures?: boolean | User$premiumFeaturesArgs<ExtArgs>
    GoogleToken?: boolean | User$GoogleTokenArgs<ExtArgs>
    RecentActivity?: boolean | User$RecentActivityArgs<ExtArgs>
    TeacherProfile?: boolean | User$TeacherProfileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      attendance: Prisma.$AttendancePayload<ExtArgs>[]
      premiumFeatures: Prisma.$PremiumFeaturePayload<ExtArgs>[]
      GoogleToken: Prisma.$GoogleTokenPayload<ExtArgs>[]
      RecentActivity: Prisma.$RecentActivityPayload<ExtArgs>[]
      TeacherProfile: Prisma.$TeacherPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      role: $Enums.Role
      isPremium: boolean
      createdAt: Date
      premiumExpiresAt: Date | null
      branch: string | null
      year: number | null
      semester: number | null
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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    attendance<T extends User$attendanceArgs<ExtArgs> = {}>(args?: Subset<T, User$attendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    premiumFeatures<T extends User$premiumFeaturesArgs<ExtArgs> = {}>(args?: Subset<T, User$premiumFeaturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremiumFeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    GoogleToken<T extends User$GoogleTokenArgs<ExtArgs> = {}>(args?: Subset<T, User$GoogleTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoogleTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RecentActivity<T extends User$RecentActivityArgs<ExtArgs> = {}>(args?: Subset<T, User$RecentActivityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecentActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TeacherProfile<T extends User$TeacherProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$TeacherProfileArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isPremium: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly premiumExpiresAt: FieldRef<"User", 'DateTime'>
    readonly branch: FieldRef<"User", 'String'>
    readonly year: FieldRef<"User", 'Int'>
    readonly semester: FieldRef<"User", 'Int'>
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
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User.attendance
   */
  export type User$attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * User.premiumFeatures
   */
  export type User$premiumFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumFeature
     */
    select?: PremiumFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumFeature
     */
    omit?: PremiumFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumFeatureInclude<ExtArgs> | null
    where?: PremiumFeatureWhereInput
    orderBy?: PremiumFeatureOrderByWithRelationInput | PremiumFeatureOrderByWithRelationInput[]
    cursor?: PremiumFeatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PremiumFeatureScalarFieldEnum | PremiumFeatureScalarFieldEnum[]
  }

  /**
   * User.GoogleToken
   */
  export type User$GoogleTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleToken
     */
    select?: GoogleTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleToken
     */
    omit?: GoogleTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleTokenInclude<ExtArgs> | null
    where?: GoogleTokenWhereInput
    orderBy?: GoogleTokenOrderByWithRelationInput | GoogleTokenOrderByWithRelationInput[]
    cursor?: GoogleTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoogleTokenScalarFieldEnum | GoogleTokenScalarFieldEnum[]
  }

  /**
   * User.RecentActivity
   */
  export type User$RecentActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecentActivity
     */
    select?: RecentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecentActivity
     */
    omit?: RecentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecentActivityInclude<ExtArgs> | null
    where?: RecentActivityWhereInput
    orderBy?: RecentActivityOrderByWithRelationInput | RecentActivityOrderByWithRelationInput[]
    cursor?: RecentActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecentActivityScalarFieldEnum | RecentActivityScalarFieldEnum[]
  }

  /**
   * User.TeacherProfile
   */
  export type User$TeacherProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    where?: TeacherWhereInput
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
   * Model Teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherMinAggregateOutputType = {
    id: string | null
    userId: string | null
    department: string | null
    designation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    department: string | null
    designation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    userId: number
    department: number
    designation: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeacherMinAggregateInputType = {
    id?: true
    userId?: true
    department?: true
    designation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    userId?: true
    department?: true
    designation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    userId?: true
    department?: true
    designation?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: string
    userId: string
    department: string | null
    designation: string | null
    createdAt: Date
    updatedAt: Date
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    department?: boolean
    designation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    subjects?: boolean | Teacher$subjectsArgs<ExtArgs>
    classes?: boolean | Teacher$classesArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    department?: boolean
    designation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    department?: boolean
    designation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectScalar = {
    id?: boolean
    userId?: boolean
    department?: boolean
    designation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "department" | "designation" | "createdAt" | "updatedAt", ExtArgs["result"]["teacher"]>
  export type TeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    subjects?: boolean | Teacher$subjectsArgs<ExtArgs>
    classes?: boolean | Teacher$classesArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeacherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TeacherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      subjects: Prisma.$TeacherSubjectPayload<ExtArgs>[]
      classes: Prisma.$ClassSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      department: string | null
      designation: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = $Result.GetResult<Prisma.$TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherFindManyArgs>(args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends TeacherCreateArgs>(args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherCreateManyArgs>(args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teachers and returns the data saved in the database.
     * @param {TeacherCreateManyAndReturnArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends TeacherDeleteArgs>(args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherUpdateArgs>(args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers and returns the data updated in the database.
     * @param {TeacherUpdateManyAndReturnArgs} args - Arguments to update many Teachers.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeacherUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
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
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subjects<T extends Teacher$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classes<T extends Teacher$classesArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Teacher model
   */
  interface TeacherFieldRefs {
    readonly id: FieldRef<"Teacher", 'String'>
    readonly userId: FieldRef<"Teacher", 'String'>
    readonly department: FieldRef<"Teacher", 'String'>
    readonly designation: FieldRef<"Teacher", 'String'>
    readonly createdAt: FieldRef<"Teacher", 'DateTime'>
    readonly updatedAt: FieldRef<"Teacher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }

  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher createManyAndReturn
   */
  export type TeacherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher updateManyAndReturn
   */
  export type TeacherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }

  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to delete.
     */
    limit?: number
  }

  /**
   * Teacher.subjects
   */
  export type Teacher$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    where?: TeacherSubjectWhereInput
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    cursor?: TeacherSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherSubjectScalarFieldEnum | TeacherSubjectScalarFieldEnum[]
  }

  /**
   * Teacher.classes
   */
  export type Teacher$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSession
     */
    select?: ClassSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSession
     */
    omit?: ClassSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSessionInclude<ExtArgs> | null
    where?: ClassSessionWhereInput
    orderBy?: ClassSessionOrderByWithRelationInput | ClassSessionOrderByWithRelationInput[]
    cursor?: ClassSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassSessionScalarFieldEnum | ClassSessionScalarFieldEnum[]
  }

  /**
   * Teacher without action
   */
  export type TeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
  }


  /**
   * Model TeacherSubject
   */

  export type AggregateTeacherSubject = {
    _count: TeacherSubjectCountAggregateOutputType | null
    _min: TeacherSubjectMinAggregateOutputType | null
    _max: TeacherSubjectMaxAggregateOutputType | null
  }

  export type TeacherSubjectMinAggregateOutputType = {
    id: string | null
    teacherId: string | null
    subjectId: string | null
    semesterId: string | null
    sectionId: string | null
  }

  export type TeacherSubjectMaxAggregateOutputType = {
    id: string | null
    teacherId: string | null
    subjectId: string | null
    semesterId: string | null
    sectionId: string | null
  }

  export type TeacherSubjectCountAggregateOutputType = {
    id: number
    teacherId: number
    subjectId: number
    semesterId: number
    sectionId: number
    _all: number
  }


  export type TeacherSubjectMinAggregateInputType = {
    id?: true
    teacherId?: true
    subjectId?: true
    semesterId?: true
    sectionId?: true
  }

  export type TeacherSubjectMaxAggregateInputType = {
    id?: true
    teacherId?: true
    subjectId?: true
    semesterId?: true
    sectionId?: true
  }

  export type TeacherSubjectCountAggregateInputType = {
    id?: true
    teacherId?: true
    subjectId?: true
    semesterId?: true
    sectionId?: true
    _all?: true
  }

  export type TeacherSubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherSubject to aggregate.
     */
    where?: TeacherSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSubjects to fetch.
     */
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeacherSubjects
    **/
    _count?: true | TeacherSubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherSubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherSubjectMaxAggregateInputType
  }

  export type GetTeacherSubjectAggregateType<T extends TeacherSubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacherSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacherSubject[P]>
      : GetScalarType<T[P], AggregateTeacherSubject[P]>
  }




  export type TeacherSubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherSubjectWhereInput
    orderBy?: TeacherSubjectOrderByWithAggregationInput | TeacherSubjectOrderByWithAggregationInput[]
    by: TeacherSubjectScalarFieldEnum[] | TeacherSubjectScalarFieldEnum
    having?: TeacherSubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherSubjectCountAggregateInputType | true
    _min?: TeacherSubjectMinAggregateInputType
    _max?: TeacherSubjectMaxAggregateInputType
  }

  export type TeacherSubjectGroupByOutputType = {
    id: string
    teacherId: string
    subjectId: string
    semesterId: string
    sectionId: string
    _count: TeacherSubjectCountAggregateOutputType | null
    _min: TeacherSubjectMinAggregateOutputType | null
    _max: TeacherSubjectMaxAggregateOutputType | null
  }

  type GetTeacherSubjectGroupByPayload<T extends TeacherSubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherSubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherSubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherSubjectGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherSubjectGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    subjectId?: boolean
    semesterId?: boolean
    sectionId?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherSubject"]>

  export type TeacherSubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    subjectId?: boolean
    semesterId?: boolean
    sectionId?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherSubject"]>

  export type TeacherSubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    subjectId?: boolean
    semesterId?: boolean
    sectionId?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherSubject"]>

  export type TeacherSubjectSelectScalar = {
    id?: boolean
    teacherId?: boolean
    subjectId?: boolean
    semesterId?: boolean
    sectionId?: boolean
  }

  export type TeacherSubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teacherId" | "subjectId" | "semesterId" | "sectionId", ExtArgs["result"]["teacherSubject"]>
  export type TeacherSubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }
  export type TeacherSubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }
  export type TeacherSubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }

  export type $TeacherSubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeacherSubject"
    objects: {
      teacher: Prisma.$TeacherPayload<ExtArgs>
      subject: Prisma.$SubjectPayload<ExtArgs>
      semester: Prisma.$SemesterPayload<ExtArgs>
      section: Prisma.$SectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teacherId: string
      subjectId: string
      semesterId: string
      sectionId: string
    }, ExtArgs["result"]["teacherSubject"]>
    composites: {}
  }

  type TeacherSubjectGetPayload<S extends boolean | null | undefined | TeacherSubjectDefaultArgs> = $Result.GetResult<Prisma.$TeacherSubjectPayload, S>

  type TeacherSubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherSubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherSubjectCountAggregateInputType | true
    }

  export interface TeacherSubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeacherSubject'], meta: { name: 'TeacherSubject' } }
    /**
     * Find zero or one TeacherSubject that matches the filter.
     * @param {TeacherSubjectFindUniqueArgs} args - Arguments to find a TeacherSubject
     * @example
     * // Get one TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherSubjectFindUniqueArgs>(args: SelectSubset<T, TeacherSubjectFindUniqueArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeacherSubject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherSubjectFindUniqueOrThrowArgs} args - Arguments to find a TeacherSubject
     * @example
     * // Get one TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherSubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherSubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherSubject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectFindFirstArgs} args - Arguments to find a TeacherSubject
     * @example
     * // Get one TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherSubjectFindFirstArgs>(args?: SelectSubset<T, TeacherSubjectFindFirstArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherSubject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectFindFirstOrThrowArgs} args - Arguments to find a TeacherSubject
     * @example
     * // Get one TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherSubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherSubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeacherSubjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeacherSubjects
     * const teacherSubjects = await prisma.teacherSubject.findMany()
     * 
     * // Get first 10 TeacherSubjects
     * const teacherSubjects = await prisma.teacherSubject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherSubjectWithIdOnly = await prisma.teacherSubject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherSubjectFindManyArgs>(args?: SelectSubset<T, TeacherSubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeacherSubject.
     * @param {TeacherSubjectCreateArgs} args - Arguments to create a TeacherSubject.
     * @example
     * // Create one TeacherSubject
     * const TeacherSubject = await prisma.teacherSubject.create({
     *   data: {
     *     // ... data to create a TeacherSubject
     *   }
     * })
     * 
     */
    create<T extends TeacherSubjectCreateArgs>(args: SelectSubset<T, TeacherSubjectCreateArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeacherSubjects.
     * @param {TeacherSubjectCreateManyArgs} args - Arguments to create many TeacherSubjects.
     * @example
     * // Create many TeacherSubjects
     * const teacherSubject = await prisma.teacherSubject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherSubjectCreateManyArgs>(args?: SelectSubset<T, TeacherSubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeacherSubjects and returns the data saved in the database.
     * @param {TeacherSubjectCreateManyAndReturnArgs} args - Arguments to create many TeacherSubjects.
     * @example
     * // Create many TeacherSubjects
     * const teacherSubject = await prisma.teacherSubject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeacherSubjects and only return the `id`
     * const teacherSubjectWithIdOnly = await prisma.teacherSubject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherSubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherSubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeacherSubject.
     * @param {TeacherSubjectDeleteArgs} args - Arguments to delete one TeacherSubject.
     * @example
     * // Delete one TeacherSubject
     * const TeacherSubject = await prisma.teacherSubject.delete({
     *   where: {
     *     // ... filter to delete one TeacherSubject
     *   }
     * })
     * 
     */
    delete<T extends TeacherSubjectDeleteArgs>(args: SelectSubset<T, TeacherSubjectDeleteArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeacherSubject.
     * @param {TeacherSubjectUpdateArgs} args - Arguments to update one TeacherSubject.
     * @example
     * // Update one TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherSubjectUpdateArgs>(args: SelectSubset<T, TeacherSubjectUpdateArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeacherSubjects.
     * @param {TeacherSubjectDeleteManyArgs} args - Arguments to filter TeacherSubjects to delete.
     * @example
     * // Delete a few TeacherSubjects
     * const { count } = await prisma.teacherSubject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherSubjectDeleteManyArgs>(args?: SelectSubset<T, TeacherSubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeacherSubjects
     * const teacherSubject = await prisma.teacherSubject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherSubjectUpdateManyArgs>(args: SelectSubset<T, TeacherSubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherSubjects and returns the data updated in the database.
     * @param {TeacherSubjectUpdateManyAndReturnArgs} args - Arguments to update many TeacherSubjects.
     * @example
     * // Update many TeacherSubjects
     * const teacherSubject = await prisma.teacherSubject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeacherSubjects and only return the `id`
     * const teacherSubjectWithIdOnly = await prisma.teacherSubject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeacherSubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherSubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeacherSubject.
     * @param {TeacherSubjectUpsertArgs} args - Arguments to update or create a TeacherSubject.
     * @example
     * // Update or create a TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.upsert({
     *   create: {
     *     // ... data to create a TeacherSubject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeacherSubject we want to update
     *   }
     * })
     */
    upsert<T extends TeacherSubjectUpsertArgs>(args: SelectSubset<T, TeacherSubjectUpsertArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeacherSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectCountArgs} args - Arguments to filter TeacherSubjects to count.
     * @example
     * // Count the number of TeacherSubjects
     * const count = await prisma.teacherSubject.count({
     *   where: {
     *     // ... the filter for the TeacherSubjects we want to count
     *   }
     * })
    **/
    count<T extends TeacherSubjectCountArgs>(
      args?: Subset<T, TeacherSubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherSubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeacherSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherSubjectAggregateArgs>(args: Subset<T, TeacherSubjectAggregateArgs>): Prisma.PrismaPromise<GetTeacherSubjectAggregateType<T>>

    /**
     * Group by TeacherSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectGroupByArgs} args - Group by arguments.
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
      T extends TeacherSubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherSubjectGroupByArgs['orderBy'] }
        : { orderBy?: TeacherSubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeacherSubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeacherSubject model
   */
  readonly fields: TeacherSubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeacherSubject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherSubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    semester<T extends SemesterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SemesterDefaultArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    section<T extends SectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionDefaultArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeacherSubject model
   */
  interface TeacherSubjectFieldRefs {
    readonly id: FieldRef<"TeacherSubject", 'String'>
    readonly teacherId: FieldRef<"TeacherSubject", 'String'>
    readonly subjectId: FieldRef<"TeacherSubject", 'String'>
    readonly semesterId: FieldRef<"TeacherSubject", 'String'>
    readonly sectionId: FieldRef<"TeacherSubject", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TeacherSubject findUnique
   */
  export type TeacherSubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSubject to fetch.
     */
    where: TeacherSubjectWhereUniqueInput
  }

  /**
   * TeacherSubject findUniqueOrThrow
   */
  export type TeacherSubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSubject to fetch.
     */
    where: TeacherSubjectWhereUniqueInput
  }

  /**
   * TeacherSubject findFirst
   */
  export type TeacherSubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSubject to fetch.
     */
    where?: TeacherSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSubjects to fetch.
     */
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherSubjects.
     */
    cursor?: TeacherSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherSubjects.
     */
    distinct?: TeacherSubjectScalarFieldEnum | TeacherSubjectScalarFieldEnum[]
  }

  /**
   * TeacherSubject findFirstOrThrow
   */
  export type TeacherSubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSubject to fetch.
     */
    where?: TeacherSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSubjects to fetch.
     */
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherSubjects.
     */
    cursor?: TeacherSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherSubjects.
     */
    distinct?: TeacherSubjectScalarFieldEnum | TeacherSubjectScalarFieldEnum[]
  }

  /**
   * TeacherSubject findMany
   */
  export type TeacherSubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSubjects to fetch.
     */
    where?: TeacherSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSubjects to fetch.
     */
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeacherSubjects.
     */
    cursor?: TeacherSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSubjects.
     */
    skip?: number
    distinct?: TeacherSubjectScalarFieldEnum | TeacherSubjectScalarFieldEnum[]
  }

  /**
   * TeacherSubject create
   */
  export type TeacherSubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a TeacherSubject.
     */
    data: XOR<TeacherSubjectCreateInput, TeacherSubjectUncheckedCreateInput>
  }

  /**
   * TeacherSubject createMany
   */
  export type TeacherSubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeacherSubjects.
     */
    data: TeacherSubjectCreateManyInput | TeacherSubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeacherSubject createManyAndReturn
   */
  export type TeacherSubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * The data used to create many TeacherSubjects.
     */
    data: TeacherSubjectCreateManyInput | TeacherSubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherSubject update
   */
  export type TeacherSubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a TeacherSubject.
     */
    data: XOR<TeacherSubjectUpdateInput, TeacherSubjectUncheckedUpdateInput>
    /**
     * Choose, which TeacherSubject to update.
     */
    where: TeacherSubjectWhereUniqueInput
  }

  /**
   * TeacherSubject updateMany
   */
  export type TeacherSubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeacherSubjects.
     */
    data: XOR<TeacherSubjectUpdateManyMutationInput, TeacherSubjectUncheckedUpdateManyInput>
    /**
     * Filter which TeacherSubjects to update
     */
    where?: TeacherSubjectWhereInput
    /**
     * Limit how many TeacherSubjects to update.
     */
    limit?: number
  }

  /**
   * TeacherSubject updateManyAndReturn
   */
  export type TeacherSubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * The data used to update TeacherSubjects.
     */
    data: XOR<TeacherSubjectUpdateManyMutationInput, TeacherSubjectUncheckedUpdateManyInput>
    /**
     * Filter which TeacherSubjects to update
     */
    where?: TeacherSubjectWhereInput
    /**
     * Limit how many TeacherSubjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherSubject upsert
   */
  export type TeacherSubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the TeacherSubject to update in case it exists.
     */
    where: TeacherSubjectWhereUniqueInput
    /**
     * In case the TeacherSubject found by the `where` argument doesn't exist, create a new TeacherSubject with this data.
     */
    create: XOR<TeacherSubjectCreateInput, TeacherSubjectUncheckedCreateInput>
    /**
     * In case the TeacherSubject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherSubjectUpdateInput, TeacherSubjectUncheckedUpdateInput>
  }

  /**
   * TeacherSubject delete
   */
  export type TeacherSubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter which TeacherSubject to delete.
     */
    where: TeacherSubjectWhereUniqueInput
  }

  /**
   * TeacherSubject deleteMany
   */
  export type TeacherSubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherSubjects to delete
     */
    where?: TeacherSubjectWhereInput
    /**
     * Limit how many TeacherSubjects to delete.
     */
    limit?: number
  }

  /**
   * TeacherSubject without action
   */
  export type TeacherSubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    subject: string | null
    date: Date | null
    status: string | null
    markedBy: string | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    subject: string | null
    date: Date | null
    status: string | null
    markedBy: string | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    studentId: number
    subject: number
    date: number
    status: number
    markedBy: number
    _all: number
  }


  export type AttendanceMinAggregateInputType = {
    id?: true
    studentId?: true
    subject?: true
    date?: true
    status?: true
    markedBy?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    studentId?: true
    subject?: true
    date?: true
    status?: true
    markedBy?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    studentId?: true
    subject?: true
    date?: true
    status?: true
    markedBy?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: string
    studentId: string
    subject: string
    date: Date
    status: string
    markedBy: string
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subject?: boolean
    date?: boolean
    status?: boolean
    markedBy?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subject?: boolean
    date?: boolean
    status?: boolean
    markedBy?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subject?: boolean
    date?: boolean
    status?: boolean
    markedBy?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    studentId?: boolean
    subject?: boolean
    date?: boolean
    status?: boolean
    markedBy?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "subject" | "date" | "status" | "markedBy", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      student: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      subject: string
      date: Date
      status: string
      markedBy: string
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {AttendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'String'>
    readonly studentId: FieldRef<"Attendance", 'String'>
    readonly subject: FieldRef<"Attendance", 'String'>
    readonly date: FieldRef<"Attendance", 'DateTime'>
    readonly status: FieldRef<"Attendance", 'String'>
    readonly markedBy: FieldRef<"Attendance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance updateManyAndReturn
   */
  export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model AttendanceToken
   */

  export type AggregateAttendanceToken = {
    _count: AttendanceTokenCountAggregateOutputType | null
    _min: AttendanceTokenMinAggregateOutputType | null
    _max: AttendanceTokenMaxAggregateOutputType | null
  }

  export type AttendanceTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    subject: string | null
    professorId: string | null
    issuedAt: Date | null
    expiresAt: Date | null
  }

  export type AttendanceTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    subject: string | null
    professorId: string | null
    issuedAt: Date | null
    expiresAt: Date | null
  }

  export type AttendanceTokenCountAggregateOutputType = {
    id: number
    token: number
    subject: number
    professorId: number
    issuedAt: number
    expiresAt: number
    _all: number
  }


  export type AttendanceTokenMinAggregateInputType = {
    id?: true
    token?: true
    subject?: true
    professorId?: true
    issuedAt?: true
    expiresAt?: true
  }

  export type AttendanceTokenMaxAggregateInputType = {
    id?: true
    token?: true
    subject?: true
    professorId?: true
    issuedAt?: true
    expiresAt?: true
  }

  export type AttendanceTokenCountAggregateInputType = {
    id?: true
    token?: true
    subject?: true
    professorId?: true
    issuedAt?: true
    expiresAt?: true
    _all?: true
  }

  export type AttendanceTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceToken to aggregate.
     */
    where?: AttendanceTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceTokens to fetch.
     */
    orderBy?: AttendanceTokenOrderByWithRelationInput | AttendanceTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttendanceTokens
    **/
    _count?: true | AttendanceTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceTokenMaxAggregateInputType
  }

  export type GetAttendanceTokenAggregateType<T extends AttendanceTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendanceToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendanceToken[P]>
      : GetScalarType<T[P], AggregateAttendanceToken[P]>
  }




  export type AttendanceTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceTokenWhereInput
    orderBy?: AttendanceTokenOrderByWithAggregationInput | AttendanceTokenOrderByWithAggregationInput[]
    by: AttendanceTokenScalarFieldEnum[] | AttendanceTokenScalarFieldEnum
    having?: AttendanceTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceTokenCountAggregateInputType | true
    _min?: AttendanceTokenMinAggregateInputType
    _max?: AttendanceTokenMaxAggregateInputType
  }

  export type AttendanceTokenGroupByOutputType = {
    id: string
    token: string
    subject: string
    professorId: string
    issuedAt: Date
    expiresAt: Date
    _count: AttendanceTokenCountAggregateOutputType | null
    _min: AttendanceTokenMinAggregateOutputType | null
    _max: AttendanceTokenMaxAggregateOutputType | null
  }

  type GetAttendanceTokenGroupByPayload<T extends AttendanceTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceTokenGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceTokenGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    subject?: boolean
    professorId?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["attendanceToken"]>

  export type AttendanceTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    subject?: boolean
    professorId?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["attendanceToken"]>

  export type AttendanceTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    subject?: boolean
    professorId?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["attendanceToken"]>

  export type AttendanceTokenSelectScalar = {
    id?: boolean
    token?: boolean
    subject?: boolean
    professorId?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
  }

  export type AttendanceTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "subject" | "professorId" | "issuedAt" | "expiresAt", ExtArgs["result"]["attendanceToken"]>

  export type $AttendanceTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttendanceToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      subject: string
      professorId: string
      issuedAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["attendanceToken"]>
    composites: {}
  }

  type AttendanceTokenGetPayload<S extends boolean | null | undefined | AttendanceTokenDefaultArgs> = $Result.GetResult<Prisma.$AttendanceTokenPayload, S>

  type AttendanceTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceTokenCountAggregateInputType | true
    }

  export interface AttendanceTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttendanceToken'], meta: { name: 'AttendanceToken' } }
    /**
     * Find zero or one AttendanceToken that matches the filter.
     * @param {AttendanceTokenFindUniqueArgs} args - Arguments to find a AttendanceToken
     * @example
     * // Get one AttendanceToken
     * const attendanceToken = await prisma.attendanceToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceTokenFindUniqueArgs>(args: SelectSubset<T, AttendanceTokenFindUniqueArgs<ExtArgs>>): Prisma__AttendanceTokenClient<$Result.GetResult<Prisma.$AttendanceTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AttendanceToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceTokenFindUniqueOrThrowArgs} args - Arguments to find a AttendanceToken
     * @example
     * // Get one AttendanceToken
     * const attendanceToken = await prisma.attendanceToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceTokenClient<$Result.GetResult<Prisma.$AttendanceTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttendanceToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceTokenFindFirstArgs} args - Arguments to find a AttendanceToken
     * @example
     * // Get one AttendanceToken
     * const attendanceToken = await prisma.attendanceToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceTokenFindFirstArgs>(args?: SelectSubset<T, AttendanceTokenFindFirstArgs<ExtArgs>>): Prisma__AttendanceTokenClient<$Result.GetResult<Prisma.$AttendanceTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttendanceToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceTokenFindFirstOrThrowArgs} args - Arguments to find a AttendanceToken
     * @example
     * // Get one AttendanceToken
     * const attendanceToken = await prisma.attendanceToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceTokenClient<$Result.GetResult<Prisma.$AttendanceTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AttendanceTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttendanceTokens
     * const attendanceTokens = await prisma.attendanceToken.findMany()
     * 
     * // Get first 10 AttendanceTokens
     * const attendanceTokens = await prisma.attendanceToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceTokenWithIdOnly = await prisma.attendanceToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceTokenFindManyArgs>(args?: SelectSubset<T, AttendanceTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AttendanceToken.
     * @param {AttendanceTokenCreateArgs} args - Arguments to create a AttendanceToken.
     * @example
     * // Create one AttendanceToken
     * const AttendanceToken = await prisma.attendanceToken.create({
     *   data: {
     *     // ... data to create a AttendanceToken
     *   }
     * })
     * 
     */
    create<T extends AttendanceTokenCreateArgs>(args: SelectSubset<T, AttendanceTokenCreateArgs<ExtArgs>>): Prisma__AttendanceTokenClient<$Result.GetResult<Prisma.$AttendanceTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AttendanceTokens.
     * @param {AttendanceTokenCreateManyArgs} args - Arguments to create many AttendanceTokens.
     * @example
     * // Create many AttendanceTokens
     * const attendanceToken = await prisma.attendanceToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceTokenCreateManyArgs>(args?: SelectSubset<T, AttendanceTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AttendanceTokens and returns the data saved in the database.
     * @param {AttendanceTokenCreateManyAndReturnArgs} args - Arguments to create many AttendanceTokens.
     * @example
     * // Create many AttendanceTokens
     * const attendanceToken = await prisma.attendanceToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AttendanceTokens and only return the `id`
     * const attendanceTokenWithIdOnly = await prisma.attendanceToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AttendanceToken.
     * @param {AttendanceTokenDeleteArgs} args - Arguments to delete one AttendanceToken.
     * @example
     * // Delete one AttendanceToken
     * const AttendanceToken = await prisma.attendanceToken.delete({
     *   where: {
     *     // ... filter to delete one AttendanceToken
     *   }
     * })
     * 
     */
    delete<T extends AttendanceTokenDeleteArgs>(args: SelectSubset<T, AttendanceTokenDeleteArgs<ExtArgs>>): Prisma__AttendanceTokenClient<$Result.GetResult<Prisma.$AttendanceTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AttendanceToken.
     * @param {AttendanceTokenUpdateArgs} args - Arguments to update one AttendanceToken.
     * @example
     * // Update one AttendanceToken
     * const attendanceToken = await prisma.attendanceToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceTokenUpdateArgs>(args: SelectSubset<T, AttendanceTokenUpdateArgs<ExtArgs>>): Prisma__AttendanceTokenClient<$Result.GetResult<Prisma.$AttendanceTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AttendanceTokens.
     * @param {AttendanceTokenDeleteManyArgs} args - Arguments to filter AttendanceTokens to delete.
     * @example
     * // Delete a few AttendanceTokens
     * const { count } = await prisma.attendanceToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceTokenDeleteManyArgs>(args?: SelectSubset<T, AttendanceTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttendanceTokens
     * const attendanceToken = await prisma.attendanceToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceTokenUpdateManyArgs>(args: SelectSubset<T, AttendanceTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceTokens and returns the data updated in the database.
     * @param {AttendanceTokenUpdateManyAndReturnArgs} args - Arguments to update many AttendanceTokens.
     * @example
     * // Update many AttendanceTokens
     * const attendanceToken = await prisma.attendanceToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AttendanceTokens and only return the `id`
     * const attendanceTokenWithIdOnly = await prisma.attendanceToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendanceTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AttendanceToken.
     * @param {AttendanceTokenUpsertArgs} args - Arguments to update or create a AttendanceToken.
     * @example
     * // Update or create a AttendanceToken
     * const attendanceToken = await prisma.attendanceToken.upsert({
     *   create: {
     *     // ... data to create a AttendanceToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttendanceToken we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceTokenUpsertArgs>(args: SelectSubset<T, AttendanceTokenUpsertArgs<ExtArgs>>): Prisma__AttendanceTokenClient<$Result.GetResult<Prisma.$AttendanceTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AttendanceTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceTokenCountArgs} args - Arguments to filter AttendanceTokens to count.
     * @example
     * // Count the number of AttendanceTokens
     * const count = await prisma.attendanceToken.count({
     *   where: {
     *     // ... the filter for the AttendanceTokens we want to count
     *   }
     * })
    **/
    count<T extends AttendanceTokenCountArgs>(
      args?: Subset<T, AttendanceTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttendanceToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceTokenAggregateArgs>(args: Subset<T, AttendanceTokenAggregateArgs>): Prisma.PrismaPromise<GetAttendanceTokenAggregateType<T>>

    /**
     * Group by AttendanceToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceTokenGroupByArgs} args - Group by arguments.
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
      T extends AttendanceTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceTokenGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttendanceToken model
   */
  readonly fields: AttendanceTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttendanceToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the AttendanceToken model
   */
  interface AttendanceTokenFieldRefs {
    readonly id: FieldRef<"AttendanceToken", 'String'>
    readonly token: FieldRef<"AttendanceToken", 'String'>
    readonly subject: FieldRef<"AttendanceToken", 'String'>
    readonly professorId: FieldRef<"AttendanceToken", 'String'>
    readonly issuedAt: FieldRef<"AttendanceToken", 'DateTime'>
    readonly expiresAt: FieldRef<"AttendanceToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AttendanceToken findUnique
   */
  export type AttendanceTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceToken
     */
    select?: AttendanceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceToken
     */
    omit?: AttendanceTokenOmit<ExtArgs> | null
    /**
     * Filter, which AttendanceToken to fetch.
     */
    where: AttendanceTokenWhereUniqueInput
  }

  /**
   * AttendanceToken findUniqueOrThrow
   */
  export type AttendanceTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceToken
     */
    select?: AttendanceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceToken
     */
    omit?: AttendanceTokenOmit<ExtArgs> | null
    /**
     * Filter, which AttendanceToken to fetch.
     */
    where: AttendanceTokenWhereUniqueInput
  }

  /**
   * AttendanceToken findFirst
   */
  export type AttendanceTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceToken
     */
    select?: AttendanceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceToken
     */
    omit?: AttendanceTokenOmit<ExtArgs> | null
    /**
     * Filter, which AttendanceToken to fetch.
     */
    where?: AttendanceTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceTokens to fetch.
     */
    orderBy?: AttendanceTokenOrderByWithRelationInput | AttendanceTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceTokens.
     */
    cursor?: AttendanceTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceTokens.
     */
    distinct?: AttendanceTokenScalarFieldEnum | AttendanceTokenScalarFieldEnum[]
  }

  /**
   * AttendanceToken findFirstOrThrow
   */
  export type AttendanceTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceToken
     */
    select?: AttendanceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceToken
     */
    omit?: AttendanceTokenOmit<ExtArgs> | null
    /**
     * Filter, which AttendanceToken to fetch.
     */
    where?: AttendanceTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceTokens to fetch.
     */
    orderBy?: AttendanceTokenOrderByWithRelationInput | AttendanceTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceTokens.
     */
    cursor?: AttendanceTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceTokens.
     */
    distinct?: AttendanceTokenScalarFieldEnum | AttendanceTokenScalarFieldEnum[]
  }

  /**
   * AttendanceToken findMany
   */
  export type AttendanceTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceToken
     */
    select?: AttendanceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceToken
     */
    omit?: AttendanceTokenOmit<ExtArgs> | null
    /**
     * Filter, which AttendanceTokens to fetch.
     */
    where?: AttendanceTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceTokens to fetch.
     */
    orderBy?: AttendanceTokenOrderByWithRelationInput | AttendanceTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttendanceTokens.
     */
    cursor?: AttendanceTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceTokens.
     */
    skip?: number
    distinct?: AttendanceTokenScalarFieldEnum | AttendanceTokenScalarFieldEnum[]
  }

  /**
   * AttendanceToken create
   */
  export type AttendanceTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceToken
     */
    select?: AttendanceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceToken
     */
    omit?: AttendanceTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a AttendanceToken.
     */
    data: XOR<AttendanceTokenCreateInput, AttendanceTokenUncheckedCreateInput>
  }

  /**
   * AttendanceToken createMany
   */
  export type AttendanceTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttendanceTokens.
     */
    data: AttendanceTokenCreateManyInput | AttendanceTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttendanceToken createManyAndReturn
   */
  export type AttendanceTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceToken
     */
    select?: AttendanceTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceToken
     */
    omit?: AttendanceTokenOmit<ExtArgs> | null
    /**
     * The data used to create many AttendanceTokens.
     */
    data: AttendanceTokenCreateManyInput | AttendanceTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttendanceToken update
   */
  export type AttendanceTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceToken
     */
    select?: AttendanceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceToken
     */
    omit?: AttendanceTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a AttendanceToken.
     */
    data: XOR<AttendanceTokenUpdateInput, AttendanceTokenUncheckedUpdateInput>
    /**
     * Choose, which AttendanceToken to update.
     */
    where: AttendanceTokenWhereUniqueInput
  }

  /**
   * AttendanceToken updateMany
   */
  export type AttendanceTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttendanceTokens.
     */
    data: XOR<AttendanceTokenUpdateManyMutationInput, AttendanceTokenUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceTokens to update
     */
    where?: AttendanceTokenWhereInput
    /**
     * Limit how many AttendanceTokens to update.
     */
    limit?: number
  }

  /**
   * AttendanceToken updateManyAndReturn
   */
  export type AttendanceTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceToken
     */
    select?: AttendanceTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceToken
     */
    omit?: AttendanceTokenOmit<ExtArgs> | null
    /**
     * The data used to update AttendanceTokens.
     */
    data: XOR<AttendanceTokenUpdateManyMutationInput, AttendanceTokenUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceTokens to update
     */
    where?: AttendanceTokenWhereInput
    /**
     * Limit how many AttendanceTokens to update.
     */
    limit?: number
  }

  /**
   * AttendanceToken upsert
   */
  export type AttendanceTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceToken
     */
    select?: AttendanceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceToken
     */
    omit?: AttendanceTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the AttendanceToken to update in case it exists.
     */
    where: AttendanceTokenWhereUniqueInput
    /**
     * In case the AttendanceToken found by the `where` argument doesn't exist, create a new AttendanceToken with this data.
     */
    create: XOR<AttendanceTokenCreateInput, AttendanceTokenUncheckedCreateInput>
    /**
     * In case the AttendanceToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceTokenUpdateInput, AttendanceTokenUncheckedUpdateInput>
  }

  /**
   * AttendanceToken delete
   */
  export type AttendanceTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceToken
     */
    select?: AttendanceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceToken
     */
    omit?: AttendanceTokenOmit<ExtArgs> | null
    /**
     * Filter which AttendanceToken to delete.
     */
    where: AttendanceTokenWhereUniqueInput
  }

  /**
   * AttendanceToken deleteMany
   */
  export type AttendanceTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceTokens to delete
     */
    where?: AttendanceTokenWhereInput
    /**
     * Limit how many AttendanceTokens to delete.
     */
    limit?: number
  }

  /**
   * AttendanceToken without action
   */
  export type AttendanceTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceToken
     */
    select?: AttendanceTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceToken
     */
    omit?: AttendanceTokenOmit<ExtArgs> | null
  }


  /**
   * Model PremiumFeature
   */

  export type AggregatePremiumFeature = {
    _count: PremiumFeatureCountAggregateOutputType | null
    _min: PremiumFeatureMinAggregateOutputType | null
    _max: PremiumFeatureMaxAggregateOutputType | null
  }

  export type PremiumFeatureMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type PremiumFeatureMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type PremiumFeatureCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type PremiumFeatureMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type PremiumFeatureMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type PremiumFeatureCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type PremiumFeatureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PremiumFeature to aggregate.
     */
    where?: PremiumFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PremiumFeatures to fetch.
     */
    orderBy?: PremiumFeatureOrderByWithRelationInput | PremiumFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PremiumFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PremiumFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PremiumFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PremiumFeatures
    **/
    _count?: true | PremiumFeatureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PremiumFeatureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PremiumFeatureMaxAggregateInputType
  }

  export type GetPremiumFeatureAggregateType<T extends PremiumFeatureAggregateArgs> = {
        [P in keyof T & keyof AggregatePremiumFeature]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePremiumFeature[P]>
      : GetScalarType<T[P], AggregatePremiumFeature[P]>
  }




  export type PremiumFeatureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PremiumFeatureWhereInput
    orderBy?: PremiumFeatureOrderByWithAggregationInput | PremiumFeatureOrderByWithAggregationInput[]
    by: PremiumFeatureScalarFieldEnum[] | PremiumFeatureScalarFieldEnum
    having?: PremiumFeatureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PremiumFeatureCountAggregateInputType | true
    _min?: PremiumFeatureMinAggregateInputType
    _max?: PremiumFeatureMaxAggregateInputType
  }

  export type PremiumFeatureGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: PremiumFeatureCountAggregateOutputType | null
    _min: PremiumFeatureMinAggregateOutputType | null
    _max: PremiumFeatureMaxAggregateOutputType | null
  }

  type GetPremiumFeatureGroupByPayload<T extends PremiumFeatureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PremiumFeatureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PremiumFeatureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PremiumFeatureGroupByOutputType[P]>
            : GetScalarType<T[P], PremiumFeatureGroupByOutputType[P]>
        }
      >
    >


  export type PremiumFeatureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    users?: boolean | PremiumFeature$usersArgs<ExtArgs>
    _count?: boolean | PremiumFeatureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["premiumFeature"]>

  export type PremiumFeatureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["premiumFeature"]>

  export type PremiumFeatureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["premiumFeature"]>

  export type PremiumFeatureSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type PremiumFeatureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["premiumFeature"]>
  export type PremiumFeatureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | PremiumFeature$usersArgs<ExtArgs>
    _count?: boolean | PremiumFeatureCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PremiumFeatureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PremiumFeatureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PremiumFeaturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PremiumFeature"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["premiumFeature"]>
    composites: {}
  }

  type PremiumFeatureGetPayload<S extends boolean | null | undefined | PremiumFeatureDefaultArgs> = $Result.GetResult<Prisma.$PremiumFeaturePayload, S>

  type PremiumFeatureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PremiumFeatureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PremiumFeatureCountAggregateInputType | true
    }

  export interface PremiumFeatureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PremiumFeature'], meta: { name: 'PremiumFeature' } }
    /**
     * Find zero or one PremiumFeature that matches the filter.
     * @param {PremiumFeatureFindUniqueArgs} args - Arguments to find a PremiumFeature
     * @example
     * // Get one PremiumFeature
     * const premiumFeature = await prisma.premiumFeature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PremiumFeatureFindUniqueArgs>(args: SelectSubset<T, PremiumFeatureFindUniqueArgs<ExtArgs>>): Prisma__PremiumFeatureClient<$Result.GetResult<Prisma.$PremiumFeaturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PremiumFeature that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PremiumFeatureFindUniqueOrThrowArgs} args - Arguments to find a PremiumFeature
     * @example
     * // Get one PremiumFeature
     * const premiumFeature = await prisma.premiumFeature.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PremiumFeatureFindUniqueOrThrowArgs>(args: SelectSubset<T, PremiumFeatureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PremiumFeatureClient<$Result.GetResult<Prisma.$PremiumFeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PremiumFeature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiumFeatureFindFirstArgs} args - Arguments to find a PremiumFeature
     * @example
     * // Get one PremiumFeature
     * const premiumFeature = await prisma.premiumFeature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PremiumFeatureFindFirstArgs>(args?: SelectSubset<T, PremiumFeatureFindFirstArgs<ExtArgs>>): Prisma__PremiumFeatureClient<$Result.GetResult<Prisma.$PremiumFeaturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PremiumFeature that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiumFeatureFindFirstOrThrowArgs} args - Arguments to find a PremiumFeature
     * @example
     * // Get one PremiumFeature
     * const premiumFeature = await prisma.premiumFeature.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PremiumFeatureFindFirstOrThrowArgs>(args?: SelectSubset<T, PremiumFeatureFindFirstOrThrowArgs<ExtArgs>>): Prisma__PremiumFeatureClient<$Result.GetResult<Prisma.$PremiumFeaturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PremiumFeatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiumFeatureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PremiumFeatures
     * const premiumFeatures = await prisma.premiumFeature.findMany()
     * 
     * // Get first 10 PremiumFeatures
     * const premiumFeatures = await prisma.premiumFeature.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const premiumFeatureWithIdOnly = await prisma.premiumFeature.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PremiumFeatureFindManyArgs>(args?: SelectSubset<T, PremiumFeatureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremiumFeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PremiumFeature.
     * @param {PremiumFeatureCreateArgs} args - Arguments to create a PremiumFeature.
     * @example
     * // Create one PremiumFeature
     * const PremiumFeature = await prisma.premiumFeature.create({
     *   data: {
     *     // ... data to create a PremiumFeature
     *   }
     * })
     * 
     */
    create<T extends PremiumFeatureCreateArgs>(args: SelectSubset<T, PremiumFeatureCreateArgs<ExtArgs>>): Prisma__PremiumFeatureClient<$Result.GetResult<Prisma.$PremiumFeaturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PremiumFeatures.
     * @param {PremiumFeatureCreateManyArgs} args - Arguments to create many PremiumFeatures.
     * @example
     * // Create many PremiumFeatures
     * const premiumFeature = await prisma.premiumFeature.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PremiumFeatureCreateManyArgs>(args?: SelectSubset<T, PremiumFeatureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PremiumFeatures and returns the data saved in the database.
     * @param {PremiumFeatureCreateManyAndReturnArgs} args - Arguments to create many PremiumFeatures.
     * @example
     * // Create many PremiumFeatures
     * const premiumFeature = await prisma.premiumFeature.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PremiumFeatures and only return the `id`
     * const premiumFeatureWithIdOnly = await prisma.premiumFeature.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PremiumFeatureCreateManyAndReturnArgs>(args?: SelectSubset<T, PremiumFeatureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremiumFeaturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PremiumFeature.
     * @param {PremiumFeatureDeleteArgs} args - Arguments to delete one PremiumFeature.
     * @example
     * // Delete one PremiumFeature
     * const PremiumFeature = await prisma.premiumFeature.delete({
     *   where: {
     *     // ... filter to delete one PremiumFeature
     *   }
     * })
     * 
     */
    delete<T extends PremiumFeatureDeleteArgs>(args: SelectSubset<T, PremiumFeatureDeleteArgs<ExtArgs>>): Prisma__PremiumFeatureClient<$Result.GetResult<Prisma.$PremiumFeaturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PremiumFeature.
     * @param {PremiumFeatureUpdateArgs} args - Arguments to update one PremiumFeature.
     * @example
     * // Update one PremiumFeature
     * const premiumFeature = await prisma.premiumFeature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PremiumFeatureUpdateArgs>(args: SelectSubset<T, PremiumFeatureUpdateArgs<ExtArgs>>): Prisma__PremiumFeatureClient<$Result.GetResult<Prisma.$PremiumFeaturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PremiumFeatures.
     * @param {PremiumFeatureDeleteManyArgs} args - Arguments to filter PremiumFeatures to delete.
     * @example
     * // Delete a few PremiumFeatures
     * const { count } = await prisma.premiumFeature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PremiumFeatureDeleteManyArgs>(args?: SelectSubset<T, PremiumFeatureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PremiumFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiumFeatureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PremiumFeatures
     * const premiumFeature = await prisma.premiumFeature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PremiumFeatureUpdateManyArgs>(args: SelectSubset<T, PremiumFeatureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PremiumFeatures and returns the data updated in the database.
     * @param {PremiumFeatureUpdateManyAndReturnArgs} args - Arguments to update many PremiumFeatures.
     * @example
     * // Update many PremiumFeatures
     * const premiumFeature = await prisma.premiumFeature.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PremiumFeatures and only return the `id`
     * const premiumFeatureWithIdOnly = await prisma.premiumFeature.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PremiumFeatureUpdateManyAndReturnArgs>(args: SelectSubset<T, PremiumFeatureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremiumFeaturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PremiumFeature.
     * @param {PremiumFeatureUpsertArgs} args - Arguments to update or create a PremiumFeature.
     * @example
     * // Update or create a PremiumFeature
     * const premiumFeature = await prisma.premiumFeature.upsert({
     *   create: {
     *     // ... data to create a PremiumFeature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PremiumFeature we want to update
     *   }
     * })
     */
    upsert<T extends PremiumFeatureUpsertArgs>(args: SelectSubset<T, PremiumFeatureUpsertArgs<ExtArgs>>): Prisma__PremiumFeatureClient<$Result.GetResult<Prisma.$PremiumFeaturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PremiumFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiumFeatureCountArgs} args - Arguments to filter PremiumFeatures to count.
     * @example
     * // Count the number of PremiumFeatures
     * const count = await prisma.premiumFeature.count({
     *   where: {
     *     // ... the filter for the PremiumFeatures we want to count
     *   }
     * })
    **/
    count<T extends PremiumFeatureCountArgs>(
      args?: Subset<T, PremiumFeatureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PremiumFeatureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PremiumFeature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiumFeatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PremiumFeatureAggregateArgs>(args: Subset<T, PremiumFeatureAggregateArgs>): Prisma.PrismaPromise<GetPremiumFeatureAggregateType<T>>

    /**
     * Group by PremiumFeature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiumFeatureGroupByArgs} args - Group by arguments.
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
      T extends PremiumFeatureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PremiumFeatureGroupByArgs['orderBy'] }
        : { orderBy?: PremiumFeatureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PremiumFeatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPremiumFeatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PremiumFeature model
   */
  readonly fields: PremiumFeatureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PremiumFeature.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PremiumFeatureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends PremiumFeature$usersArgs<ExtArgs> = {}>(args?: Subset<T, PremiumFeature$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PremiumFeature model
   */
  interface PremiumFeatureFieldRefs {
    readonly id: FieldRef<"PremiumFeature", 'String'>
    readonly name: FieldRef<"PremiumFeature", 'String'>
    readonly createdAt: FieldRef<"PremiumFeature", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PremiumFeature findUnique
   */
  export type PremiumFeatureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumFeature
     */
    select?: PremiumFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumFeature
     */
    omit?: PremiumFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumFeatureInclude<ExtArgs> | null
    /**
     * Filter, which PremiumFeature to fetch.
     */
    where: PremiumFeatureWhereUniqueInput
  }

  /**
   * PremiumFeature findUniqueOrThrow
   */
  export type PremiumFeatureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumFeature
     */
    select?: PremiumFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumFeature
     */
    omit?: PremiumFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumFeatureInclude<ExtArgs> | null
    /**
     * Filter, which PremiumFeature to fetch.
     */
    where: PremiumFeatureWhereUniqueInput
  }

  /**
   * PremiumFeature findFirst
   */
  export type PremiumFeatureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumFeature
     */
    select?: PremiumFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumFeature
     */
    omit?: PremiumFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumFeatureInclude<ExtArgs> | null
    /**
     * Filter, which PremiumFeature to fetch.
     */
    where?: PremiumFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PremiumFeatures to fetch.
     */
    orderBy?: PremiumFeatureOrderByWithRelationInput | PremiumFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PremiumFeatures.
     */
    cursor?: PremiumFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PremiumFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PremiumFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PremiumFeatures.
     */
    distinct?: PremiumFeatureScalarFieldEnum | PremiumFeatureScalarFieldEnum[]
  }

  /**
   * PremiumFeature findFirstOrThrow
   */
  export type PremiumFeatureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumFeature
     */
    select?: PremiumFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumFeature
     */
    omit?: PremiumFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumFeatureInclude<ExtArgs> | null
    /**
     * Filter, which PremiumFeature to fetch.
     */
    where?: PremiumFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PremiumFeatures to fetch.
     */
    orderBy?: PremiumFeatureOrderByWithRelationInput | PremiumFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PremiumFeatures.
     */
    cursor?: PremiumFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PremiumFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PremiumFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PremiumFeatures.
     */
    distinct?: PremiumFeatureScalarFieldEnum | PremiumFeatureScalarFieldEnum[]
  }

  /**
   * PremiumFeature findMany
   */
  export type PremiumFeatureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumFeature
     */
    select?: PremiumFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumFeature
     */
    omit?: PremiumFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumFeatureInclude<ExtArgs> | null
    /**
     * Filter, which PremiumFeatures to fetch.
     */
    where?: PremiumFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PremiumFeatures to fetch.
     */
    orderBy?: PremiumFeatureOrderByWithRelationInput | PremiumFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PremiumFeatures.
     */
    cursor?: PremiumFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PremiumFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PremiumFeatures.
     */
    skip?: number
    distinct?: PremiumFeatureScalarFieldEnum | PremiumFeatureScalarFieldEnum[]
  }

  /**
   * PremiumFeature create
   */
  export type PremiumFeatureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumFeature
     */
    select?: PremiumFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumFeature
     */
    omit?: PremiumFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumFeatureInclude<ExtArgs> | null
    /**
     * The data needed to create a PremiumFeature.
     */
    data: XOR<PremiumFeatureCreateInput, PremiumFeatureUncheckedCreateInput>
  }

  /**
   * PremiumFeature createMany
   */
  export type PremiumFeatureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PremiumFeatures.
     */
    data: PremiumFeatureCreateManyInput | PremiumFeatureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PremiumFeature createManyAndReturn
   */
  export type PremiumFeatureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumFeature
     */
    select?: PremiumFeatureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumFeature
     */
    omit?: PremiumFeatureOmit<ExtArgs> | null
    /**
     * The data used to create many PremiumFeatures.
     */
    data: PremiumFeatureCreateManyInput | PremiumFeatureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PremiumFeature update
   */
  export type PremiumFeatureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumFeature
     */
    select?: PremiumFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumFeature
     */
    omit?: PremiumFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumFeatureInclude<ExtArgs> | null
    /**
     * The data needed to update a PremiumFeature.
     */
    data: XOR<PremiumFeatureUpdateInput, PremiumFeatureUncheckedUpdateInput>
    /**
     * Choose, which PremiumFeature to update.
     */
    where: PremiumFeatureWhereUniqueInput
  }

  /**
   * PremiumFeature updateMany
   */
  export type PremiumFeatureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PremiumFeatures.
     */
    data: XOR<PremiumFeatureUpdateManyMutationInput, PremiumFeatureUncheckedUpdateManyInput>
    /**
     * Filter which PremiumFeatures to update
     */
    where?: PremiumFeatureWhereInput
    /**
     * Limit how many PremiumFeatures to update.
     */
    limit?: number
  }

  /**
   * PremiumFeature updateManyAndReturn
   */
  export type PremiumFeatureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumFeature
     */
    select?: PremiumFeatureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumFeature
     */
    omit?: PremiumFeatureOmit<ExtArgs> | null
    /**
     * The data used to update PremiumFeatures.
     */
    data: XOR<PremiumFeatureUpdateManyMutationInput, PremiumFeatureUncheckedUpdateManyInput>
    /**
     * Filter which PremiumFeatures to update
     */
    where?: PremiumFeatureWhereInput
    /**
     * Limit how many PremiumFeatures to update.
     */
    limit?: number
  }

  /**
   * PremiumFeature upsert
   */
  export type PremiumFeatureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumFeature
     */
    select?: PremiumFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumFeature
     */
    omit?: PremiumFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumFeatureInclude<ExtArgs> | null
    /**
     * The filter to search for the PremiumFeature to update in case it exists.
     */
    where: PremiumFeatureWhereUniqueInput
    /**
     * In case the PremiumFeature found by the `where` argument doesn't exist, create a new PremiumFeature with this data.
     */
    create: XOR<PremiumFeatureCreateInput, PremiumFeatureUncheckedCreateInput>
    /**
     * In case the PremiumFeature was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PremiumFeatureUpdateInput, PremiumFeatureUncheckedUpdateInput>
  }

  /**
   * PremiumFeature delete
   */
  export type PremiumFeatureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumFeature
     */
    select?: PremiumFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumFeature
     */
    omit?: PremiumFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumFeatureInclude<ExtArgs> | null
    /**
     * Filter which PremiumFeature to delete.
     */
    where: PremiumFeatureWhereUniqueInput
  }

  /**
   * PremiumFeature deleteMany
   */
  export type PremiumFeatureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PremiumFeatures to delete
     */
    where?: PremiumFeatureWhereInput
    /**
     * Limit how many PremiumFeatures to delete.
     */
    limit?: number
  }

  /**
   * PremiumFeature.users
   */
  export type PremiumFeature$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * PremiumFeature without action
   */
  export type PremiumFeatureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiumFeature
     */
    select?: PremiumFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremiumFeature
     */
    omit?: PremiumFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiumFeatureInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    date: Date | null
    type: $Enums.EventType | null
    active: boolean | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    date: Date | null
    type: $Enums.EventType | null
    active: boolean | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    date: number
    type: number
    active: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    type?: true
    active?: true
    createdBy?: true
    createdAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    type?: true
    active?: true
    createdBy?: true
    createdAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    type?: true
    active?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    title: string
    description: string | null
    date: Date
    type: $Enums.EventType
    active: boolean
    createdBy: string
    createdAt: Date
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    type?: boolean
    active?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    type?: boolean
    active?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    type?: boolean
    active?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    type?: boolean
    active?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "date" | "type" | "active" | "createdBy" | "createdAt", ExtArgs["result"]["event"]>

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      date: Date
      type: $Enums.EventType
      active: boolean
      createdBy: string
      createdAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly date: FieldRef<"Event", 'DateTime'>
    readonly type: FieldRef<"Event", 'EventType'>
    readonly active: FieldRef<"Event", 'Boolean'>
    readonly createdBy: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
  }


  /**
   * Model GoogleToken
   */

  export type AggregateGoogleToken = {
    _count: GoogleTokenCountAggregateOutputType | null
    _min: GoogleTokenMinAggregateOutputType | null
    _max: GoogleTokenMaxAggregateOutputType | null
  }

  export type GoogleTokenMinAggregateOutputType = {
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoogleTokenMaxAggregateOutputType = {
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoogleTokenCountAggregateOutputType = {
    userId: number
    accessToken: number
    refreshToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GoogleTokenMinAggregateInputType = {
    userId?: true
    accessToken?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoogleTokenMaxAggregateInputType = {
    userId?: true
    accessToken?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoogleTokenCountAggregateInputType = {
    userId?: true
    accessToken?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GoogleTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoogleToken to aggregate.
     */
    where?: GoogleTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoogleTokens to fetch.
     */
    orderBy?: GoogleTokenOrderByWithRelationInput | GoogleTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoogleTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoogleTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoogleTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GoogleTokens
    **/
    _count?: true | GoogleTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoogleTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoogleTokenMaxAggregateInputType
  }

  export type GetGoogleTokenAggregateType<T extends GoogleTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateGoogleToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoogleToken[P]>
      : GetScalarType<T[P], AggregateGoogleToken[P]>
  }




  export type GoogleTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoogleTokenWhereInput
    orderBy?: GoogleTokenOrderByWithAggregationInput | GoogleTokenOrderByWithAggregationInput[]
    by: GoogleTokenScalarFieldEnum[] | GoogleTokenScalarFieldEnum
    having?: GoogleTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoogleTokenCountAggregateInputType | true
    _min?: GoogleTokenMinAggregateInputType
    _max?: GoogleTokenMaxAggregateInputType
  }

  export type GoogleTokenGroupByOutputType = {
    userId: string
    accessToken: string
    refreshToken: string | null
    createdAt: Date
    updatedAt: Date
    _count: GoogleTokenCountAggregateOutputType | null
    _min: GoogleTokenMinAggregateOutputType | null
    _max: GoogleTokenMaxAggregateOutputType | null
  }

  type GetGoogleTokenGroupByPayload<T extends GoogleTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoogleTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoogleTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoogleTokenGroupByOutputType[P]>
            : GetScalarType<T[P], GoogleTokenGroupByOutputType[P]>
        }
      >
    >


  export type GoogleTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["googleToken"]>

  export type GoogleTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["googleToken"]>

  export type GoogleTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["googleToken"]>

  export type GoogleTokenSelectScalar = {
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GoogleTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "accessToken" | "refreshToken" | "createdAt" | "updatedAt", ExtArgs["result"]["googleToken"]>
  export type GoogleTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GoogleTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GoogleTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GoogleTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GoogleToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      accessToken: string
      refreshToken: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["googleToken"]>
    composites: {}
  }

  type GoogleTokenGetPayload<S extends boolean | null | undefined | GoogleTokenDefaultArgs> = $Result.GetResult<Prisma.$GoogleTokenPayload, S>

  type GoogleTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoogleTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoogleTokenCountAggregateInputType | true
    }

  export interface GoogleTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GoogleToken'], meta: { name: 'GoogleToken' } }
    /**
     * Find zero or one GoogleToken that matches the filter.
     * @param {GoogleTokenFindUniqueArgs} args - Arguments to find a GoogleToken
     * @example
     * // Get one GoogleToken
     * const googleToken = await prisma.googleToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoogleTokenFindUniqueArgs>(args: SelectSubset<T, GoogleTokenFindUniqueArgs<ExtArgs>>): Prisma__GoogleTokenClient<$Result.GetResult<Prisma.$GoogleTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GoogleToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoogleTokenFindUniqueOrThrowArgs} args - Arguments to find a GoogleToken
     * @example
     * // Get one GoogleToken
     * const googleToken = await prisma.googleToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoogleTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, GoogleTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoogleTokenClient<$Result.GetResult<Prisma.$GoogleTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GoogleToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleTokenFindFirstArgs} args - Arguments to find a GoogleToken
     * @example
     * // Get one GoogleToken
     * const googleToken = await prisma.googleToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoogleTokenFindFirstArgs>(args?: SelectSubset<T, GoogleTokenFindFirstArgs<ExtArgs>>): Prisma__GoogleTokenClient<$Result.GetResult<Prisma.$GoogleTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GoogleToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleTokenFindFirstOrThrowArgs} args - Arguments to find a GoogleToken
     * @example
     * // Get one GoogleToken
     * const googleToken = await prisma.googleToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoogleTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, GoogleTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoogleTokenClient<$Result.GetResult<Prisma.$GoogleTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GoogleTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GoogleTokens
     * const googleTokens = await prisma.googleToken.findMany()
     * 
     * // Get first 10 GoogleTokens
     * const googleTokens = await prisma.googleToken.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const googleTokenWithUserIdOnly = await prisma.googleToken.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends GoogleTokenFindManyArgs>(args?: SelectSubset<T, GoogleTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoogleTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GoogleToken.
     * @param {GoogleTokenCreateArgs} args - Arguments to create a GoogleToken.
     * @example
     * // Create one GoogleToken
     * const GoogleToken = await prisma.googleToken.create({
     *   data: {
     *     // ... data to create a GoogleToken
     *   }
     * })
     * 
     */
    create<T extends GoogleTokenCreateArgs>(args: SelectSubset<T, GoogleTokenCreateArgs<ExtArgs>>): Prisma__GoogleTokenClient<$Result.GetResult<Prisma.$GoogleTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GoogleTokens.
     * @param {GoogleTokenCreateManyArgs} args - Arguments to create many GoogleTokens.
     * @example
     * // Create many GoogleTokens
     * const googleToken = await prisma.googleToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoogleTokenCreateManyArgs>(args?: SelectSubset<T, GoogleTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GoogleTokens and returns the data saved in the database.
     * @param {GoogleTokenCreateManyAndReturnArgs} args - Arguments to create many GoogleTokens.
     * @example
     * // Create many GoogleTokens
     * const googleToken = await prisma.googleToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GoogleTokens and only return the `userId`
     * const googleTokenWithUserIdOnly = await prisma.googleToken.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoogleTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, GoogleTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoogleTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GoogleToken.
     * @param {GoogleTokenDeleteArgs} args - Arguments to delete one GoogleToken.
     * @example
     * // Delete one GoogleToken
     * const GoogleToken = await prisma.googleToken.delete({
     *   where: {
     *     // ... filter to delete one GoogleToken
     *   }
     * })
     * 
     */
    delete<T extends GoogleTokenDeleteArgs>(args: SelectSubset<T, GoogleTokenDeleteArgs<ExtArgs>>): Prisma__GoogleTokenClient<$Result.GetResult<Prisma.$GoogleTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GoogleToken.
     * @param {GoogleTokenUpdateArgs} args - Arguments to update one GoogleToken.
     * @example
     * // Update one GoogleToken
     * const googleToken = await prisma.googleToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoogleTokenUpdateArgs>(args: SelectSubset<T, GoogleTokenUpdateArgs<ExtArgs>>): Prisma__GoogleTokenClient<$Result.GetResult<Prisma.$GoogleTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GoogleTokens.
     * @param {GoogleTokenDeleteManyArgs} args - Arguments to filter GoogleTokens to delete.
     * @example
     * // Delete a few GoogleTokens
     * const { count } = await prisma.googleToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoogleTokenDeleteManyArgs>(args?: SelectSubset<T, GoogleTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoogleTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GoogleTokens
     * const googleToken = await prisma.googleToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoogleTokenUpdateManyArgs>(args: SelectSubset<T, GoogleTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoogleTokens and returns the data updated in the database.
     * @param {GoogleTokenUpdateManyAndReturnArgs} args - Arguments to update many GoogleTokens.
     * @example
     * // Update many GoogleTokens
     * const googleToken = await prisma.googleToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GoogleTokens and only return the `userId`
     * const googleTokenWithUserIdOnly = await prisma.googleToken.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GoogleTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, GoogleTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoogleTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GoogleToken.
     * @param {GoogleTokenUpsertArgs} args - Arguments to update or create a GoogleToken.
     * @example
     * // Update or create a GoogleToken
     * const googleToken = await prisma.googleToken.upsert({
     *   create: {
     *     // ... data to create a GoogleToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GoogleToken we want to update
     *   }
     * })
     */
    upsert<T extends GoogleTokenUpsertArgs>(args: SelectSubset<T, GoogleTokenUpsertArgs<ExtArgs>>): Prisma__GoogleTokenClient<$Result.GetResult<Prisma.$GoogleTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GoogleTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleTokenCountArgs} args - Arguments to filter GoogleTokens to count.
     * @example
     * // Count the number of GoogleTokens
     * const count = await prisma.googleToken.count({
     *   where: {
     *     // ... the filter for the GoogleTokens we want to count
     *   }
     * })
    **/
    count<T extends GoogleTokenCountArgs>(
      args?: Subset<T, GoogleTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoogleTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GoogleToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoogleTokenAggregateArgs>(args: Subset<T, GoogleTokenAggregateArgs>): Prisma.PrismaPromise<GetGoogleTokenAggregateType<T>>

    /**
     * Group by GoogleToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleTokenGroupByArgs} args - Group by arguments.
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
      T extends GoogleTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoogleTokenGroupByArgs['orderBy'] }
        : { orderBy?: GoogleTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GoogleTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoogleTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GoogleToken model
   */
  readonly fields: GoogleTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GoogleToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoogleTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the GoogleToken model
   */
  interface GoogleTokenFieldRefs {
    readonly userId: FieldRef<"GoogleToken", 'String'>
    readonly accessToken: FieldRef<"GoogleToken", 'String'>
    readonly refreshToken: FieldRef<"GoogleToken", 'String'>
    readonly createdAt: FieldRef<"GoogleToken", 'DateTime'>
    readonly updatedAt: FieldRef<"GoogleToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GoogleToken findUnique
   */
  export type GoogleTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleToken
     */
    select?: GoogleTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleToken
     */
    omit?: GoogleTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleTokenInclude<ExtArgs> | null
    /**
     * Filter, which GoogleToken to fetch.
     */
    where: GoogleTokenWhereUniqueInput
  }

  /**
   * GoogleToken findUniqueOrThrow
   */
  export type GoogleTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleToken
     */
    select?: GoogleTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleToken
     */
    omit?: GoogleTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleTokenInclude<ExtArgs> | null
    /**
     * Filter, which GoogleToken to fetch.
     */
    where: GoogleTokenWhereUniqueInput
  }

  /**
   * GoogleToken findFirst
   */
  export type GoogleTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleToken
     */
    select?: GoogleTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleToken
     */
    omit?: GoogleTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleTokenInclude<ExtArgs> | null
    /**
     * Filter, which GoogleToken to fetch.
     */
    where?: GoogleTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoogleTokens to fetch.
     */
    orderBy?: GoogleTokenOrderByWithRelationInput | GoogleTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoogleTokens.
     */
    cursor?: GoogleTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoogleTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoogleTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoogleTokens.
     */
    distinct?: GoogleTokenScalarFieldEnum | GoogleTokenScalarFieldEnum[]
  }

  /**
   * GoogleToken findFirstOrThrow
   */
  export type GoogleTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleToken
     */
    select?: GoogleTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleToken
     */
    omit?: GoogleTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleTokenInclude<ExtArgs> | null
    /**
     * Filter, which GoogleToken to fetch.
     */
    where?: GoogleTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoogleTokens to fetch.
     */
    orderBy?: GoogleTokenOrderByWithRelationInput | GoogleTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoogleTokens.
     */
    cursor?: GoogleTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoogleTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoogleTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoogleTokens.
     */
    distinct?: GoogleTokenScalarFieldEnum | GoogleTokenScalarFieldEnum[]
  }

  /**
   * GoogleToken findMany
   */
  export type GoogleTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleToken
     */
    select?: GoogleTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleToken
     */
    omit?: GoogleTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleTokenInclude<ExtArgs> | null
    /**
     * Filter, which GoogleTokens to fetch.
     */
    where?: GoogleTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoogleTokens to fetch.
     */
    orderBy?: GoogleTokenOrderByWithRelationInput | GoogleTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GoogleTokens.
     */
    cursor?: GoogleTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoogleTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoogleTokens.
     */
    skip?: number
    distinct?: GoogleTokenScalarFieldEnum | GoogleTokenScalarFieldEnum[]
  }

  /**
   * GoogleToken create
   */
  export type GoogleTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleToken
     */
    select?: GoogleTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleToken
     */
    omit?: GoogleTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a GoogleToken.
     */
    data: XOR<GoogleTokenCreateInput, GoogleTokenUncheckedCreateInput>
  }

  /**
   * GoogleToken createMany
   */
  export type GoogleTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GoogleTokens.
     */
    data: GoogleTokenCreateManyInput | GoogleTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GoogleToken createManyAndReturn
   */
  export type GoogleTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleToken
     */
    select?: GoogleTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleToken
     */
    omit?: GoogleTokenOmit<ExtArgs> | null
    /**
     * The data used to create many GoogleTokens.
     */
    data: GoogleTokenCreateManyInput | GoogleTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GoogleToken update
   */
  export type GoogleTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleToken
     */
    select?: GoogleTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleToken
     */
    omit?: GoogleTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a GoogleToken.
     */
    data: XOR<GoogleTokenUpdateInput, GoogleTokenUncheckedUpdateInput>
    /**
     * Choose, which GoogleToken to update.
     */
    where: GoogleTokenWhereUniqueInput
  }

  /**
   * GoogleToken updateMany
   */
  export type GoogleTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GoogleTokens.
     */
    data: XOR<GoogleTokenUpdateManyMutationInput, GoogleTokenUncheckedUpdateManyInput>
    /**
     * Filter which GoogleTokens to update
     */
    where?: GoogleTokenWhereInput
    /**
     * Limit how many GoogleTokens to update.
     */
    limit?: number
  }

  /**
   * GoogleToken updateManyAndReturn
   */
  export type GoogleTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleToken
     */
    select?: GoogleTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleToken
     */
    omit?: GoogleTokenOmit<ExtArgs> | null
    /**
     * The data used to update GoogleTokens.
     */
    data: XOR<GoogleTokenUpdateManyMutationInput, GoogleTokenUncheckedUpdateManyInput>
    /**
     * Filter which GoogleTokens to update
     */
    where?: GoogleTokenWhereInput
    /**
     * Limit how many GoogleTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GoogleToken upsert
   */
  export type GoogleTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleToken
     */
    select?: GoogleTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleToken
     */
    omit?: GoogleTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the GoogleToken to update in case it exists.
     */
    where: GoogleTokenWhereUniqueInput
    /**
     * In case the GoogleToken found by the `where` argument doesn't exist, create a new GoogleToken with this data.
     */
    create: XOR<GoogleTokenCreateInput, GoogleTokenUncheckedCreateInput>
    /**
     * In case the GoogleToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoogleTokenUpdateInput, GoogleTokenUncheckedUpdateInput>
  }

  /**
   * GoogleToken delete
   */
  export type GoogleTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleToken
     */
    select?: GoogleTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleToken
     */
    omit?: GoogleTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleTokenInclude<ExtArgs> | null
    /**
     * Filter which GoogleToken to delete.
     */
    where: GoogleTokenWhereUniqueInput
  }

  /**
   * GoogleToken deleteMany
   */
  export type GoogleTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoogleTokens to delete
     */
    where?: GoogleTokenWhereInput
    /**
     * Limit how many GoogleTokens to delete.
     */
    limit?: number
  }

  /**
   * GoogleToken without action
   */
  export type GoogleTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleToken
     */
    select?: GoogleTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleToken
     */
    omit?: GoogleTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleTokenInclude<ExtArgs> | null
  }


  /**
   * Model RecentActivity
   */

  export type AggregateRecentActivity = {
    _count: RecentActivityCountAggregateOutputType | null
    _min: RecentActivityMinAggregateOutputType | null
    _max: RecentActivityMaxAggregateOutputType | null
  }

  export type RecentActivityMinAggregateOutputType = {
    id: string | null
    userId: string | null
    userName: string | null
    action: string | null
    timestamp: Date | null
  }

  export type RecentActivityMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    userName: string | null
    action: string | null
    timestamp: Date | null
  }

  export type RecentActivityCountAggregateOutputType = {
    id: number
    userId: number
    userName: number
    action: number
    timestamp: number
    _all: number
  }


  export type RecentActivityMinAggregateInputType = {
    id?: true
    userId?: true
    userName?: true
    action?: true
    timestamp?: true
  }

  export type RecentActivityMaxAggregateInputType = {
    id?: true
    userId?: true
    userName?: true
    action?: true
    timestamp?: true
  }

  export type RecentActivityCountAggregateInputType = {
    id?: true
    userId?: true
    userName?: true
    action?: true
    timestamp?: true
    _all?: true
  }

  export type RecentActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecentActivity to aggregate.
     */
    where?: RecentActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecentActivities to fetch.
     */
    orderBy?: RecentActivityOrderByWithRelationInput | RecentActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecentActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecentActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecentActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecentActivities
    **/
    _count?: true | RecentActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecentActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecentActivityMaxAggregateInputType
  }

  export type GetRecentActivityAggregateType<T extends RecentActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateRecentActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecentActivity[P]>
      : GetScalarType<T[P], AggregateRecentActivity[P]>
  }




  export type RecentActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecentActivityWhereInput
    orderBy?: RecentActivityOrderByWithAggregationInput | RecentActivityOrderByWithAggregationInput[]
    by: RecentActivityScalarFieldEnum[] | RecentActivityScalarFieldEnum
    having?: RecentActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecentActivityCountAggregateInputType | true
    _min?: RecentActivityMinAggregateInputType
    _max?: RecentActivityMaxAggregateInputType
  }

  export type RecentActivityGroupByOutputType = {
    id: string
    userId: string | null
    userName: string | null
    action: string
    timestamp: Date
    _count: RecentActivityCountAggregateOutputType | null
    _min: RecentActivityMinAggregateOutputType | null
    _max: RecentActivityMaxAggregateOutputType | null
  }

  type GetRecentActivityGroupByPayload<T extends RecentActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecentActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecentActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecentActivityGroupByOutputType[P]>
            : GetScalarType<T[P], RecentActivityGroupByOutputType[P]>
        }
      >
    >


  export type RecentActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userName?: boolean
    action?: boolean
    timestamp?: boolean
    user?: boolean | RecentActivity$userArgs<ExtArgs>
  }, ExtArgs["result"]["recentActivity"]>

  export type RecentActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userName?: boolean
    action?: boolean
    timestamp?: boolean
    user?: boolean | RecentActivity$userArgs<ExtArgs>
  }, ExtArgs["result"]["recentActivity"]>

  export type RecentActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userName?: boolean
    action?: boolean
    timestamp?: boolean
    user?: boolean | RecentActivity$userArgs<ExtArgs>
  }, ExtArgs["result"]["recentActivity"]>

  export type RecentActivitySelectScalar = {
    id?: boolean
    userId?: boolean
    userName?: boolean
    action?: boolean
    timestamp?: boolean
  }

  export type RecentActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "userName" | "action" | "timestamp", ExtArgs["result"]["recentActivity"]>
  export type RecentActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | RecentActivity$userArgs<ExtArgs>
  }
  export type RecentActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | RecentActivity$userArgs<ExtArgs>
  }
  export type RecentActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | RecentActivity$userArgs<ExtArgs>
  }

  export type $RecentActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecentActivity"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      userName: string | null
      action: string
      timestamp: Date
    }, ExtArgs["result"]["recentActivity"]>
    composites: {}
  }

  type RecentActivityGetPayload<S extends boolean | null | undefined | RecentActivityDefaultArgs> = $Result.GetResult<Prisma.$RecentActivityPayload, S>

  type RecentActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecentActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecentActivityCountAggregateInputType | true
    }

  export interface RecentActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecentActivity'], meta: { name: 'RecentActivity' } }
    /**
     * Find zero or one RecentActivity that matches the filter.
     * @param {RecentActivityFindUniqueArgs} args - Arguments to find a RecentActivity
     * @example
     * // Get one RecentActivity
     * const recentActivity = await prisma.recentActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecentActivityFindUniqueArgs>(args: SelectSubset<T, RecentActivityFindUniqueArgs<ExtArgs>>): Prisma__RecentActivityClient<$Result.GetResult<Prisma.$RecentActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecentActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecentActivityFindUniqueOrThrowArgs} args - Arguments to find a RecentActivity
     * @example
     * // Get one RecentActivity
     * const recentActivity = await prisma.recentActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecentActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, RecentActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecentActivityClient<$Result.GetResult<Prisma.$RecentActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecentActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecentActivityFindFirstArgs} args - Arguments to find a RecentActivity
     * @example
     * // Get one RecentActivity
     * const recentActivity = await prisma.recentActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecentActivityFindFirstArgs>(args?: SelectSubset<T, RecentActivityFindFirstArgs<ExtArgs>>): Prisma__RecentActivityClient<$Result.GetResult<Prisma.$RecentActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecentActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecentActivityFindFirstOrThrowArgs} args - Arguments to find a RecentActivity
     * @example
     * // Get one RecentActivity
     * const recentActivity = await prisma.recentActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecentActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, RecentActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecentActivityClient<$Result.GetResult<Prisma.$RecentActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecentActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecentActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecentActivities
     * const recentActivities = await prisma.recentActivity.findMany()
     * 
     * // Get first 10 RecentActivities
     * const recentActivities = await prisma.recentActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recentActivityWithIdOnly = await prisma.recentActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecentActivityFindManyArgs>(args?: SelectSubset<T, RecentActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecentActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecentActivity.
     * @param {RecentActivityCreateArgs} args - Arguments to create a RecentActivity.
     * @example
     * // Create one RecentActivity
     * const RecentActivity = await prisma.recentActivity.create({
     *   data: {
     *     // ... data to create a RecentActivity
     *   }
     * })
     * 
     */
    create<T extends RecentActivityCreateArgs>(args: SelectSubset<T, RecentActivityCreateArgs<ExtArgs>>): Prisma__RecentActivityClient<$Result.GetResult<Prisma.$RecentActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecentActivities.
     * @param {RecentActivityCreateManyArgs} args - Arguments to create many RecentActivities.
     * @example
     * // Create many RecentActivities
     * const recentActivity = await prisma.recentActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecentActivityCreateManyArgs>(args?: SelectSubset<T, RecentActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecentActivities and returns the data saved in the database.
     * @param {RecentActivityCreateManyAndReturnArgs} args - Arguments to create many RecentActivities.
     * @example
     * // Create many RecentActivities
     * const recentActivity = await prisma.recentActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecentActivities and only return the `id`
     * const recentActivityWithIdOnly = await prisma.recentActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecentActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, RecentActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecentActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecentActivity.
     * @param {RecentActivityDeleteArgs} args - Arguments to delete one RecentActivity.
     * @example
     * // Delete one RecentActivity
     * const RecentActivity = await prisma.recentActivity.delete({
     *   where: {
     *     // ... filter to delete one RecentActivity
     *   }
     * })
     * 
     */
    delete<T extends RecentActivityDeleteArgs>(args: SelectSubset<T, RecentActivityDeleteArgs<ExtArgs>>): Prisma__RecentActivityClient<$Result.GetResult<Prisma.$RecentActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecentActivity.
     * @param {RecentActivityUpdateArgs} args - Arguments to update one RecentActivity.
     * @example
     * // Update one RecentActivity
     * const recentActivity = await prisma.recentActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecentActivityUpdateArgs>(args: SelectSubset<T, RecentActivityUpdateArgs<ExtArgs>>): Prisma__RecentActivityClient<$Result.GetResult<Prisma.$RecentActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecentActivities.
     * @param {RecentActivityDeleteManyArgs} args - Arguments to filter RecentActivities to delete.
     * @example
     * // Delete a few RecentActivities
     * const { count } = await prisma.recentActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecentActivityDeleteManyArgs>(args?: SelectSubset<T, RecentActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecentActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecentActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecentActivities
     * const recentActivity = await prisma.recentActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecentActivityUpdateManyArgs>(args: SelectSubset<T, RecentActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecentActivities and returns the data updated in the database.
     * @param {RecentActivityUpdateManyAndReturnArgs} args - Arguments to update many RecentActivities.
     * @example
     * // Update many RecentActivities
     * const recentActivity = await prisma.recentActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecentActivities and only return the `id`
     * const recentActivityWithIdOnly = await prisma.recentActivity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecentActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, RecentActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecentActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecentActivity.
     * @param {RecentActivityUpsertArgs} args - Arguments to update or create a RecentActivity.
     * @example
     * // Update or create a RecentActivity
     * const recentActivity = await prisma.recentActivity.upsert({
     *   create: {
     *     // ... data to create a RecentActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecentActivity we want to update
     *   }
     * })
     */
    upsert<T extends RecentActivityUpsertArgs>(args: SelectSubset<T, RecentActivityUpsertArgs<ExtArgs>>): Prisma__RecentActivityClient<$Result.GetResult<Prisma.$RecentActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecentActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecentActivityCountArgs} args - Arguments to filter RecentActivities to count.
     * @example
     * // Count the number of RecentActivities
     * const count = await prisma.recentActivity.count({
     *   where: {
     *     // ... the filter for the RecentActivities we want to count
     *   }
     * })
    **/
    count<T extends RecentActivityCountArgs>(
      args?: Subset<T, RecentActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecentActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecentActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecentActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecentActivityAggregateArgs>(args: Subset<T, RecentActivityAggregateArgs>): Prisma.PrismaPromise<GetRecentActivityAggregateType<T>>

    /**
     * Group by RecentActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecentActivityGroupByArgs} args - Group by arguments.
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
      T extends RecentActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecentActivityGroupByArgs['orderBy'] }
        : { orderBy?: RecentActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecentActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecentActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecentActivity model
   */
  readonly fields: RecentActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecentActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecentActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends RecentActivity$userArgs<ExtArgs> = {}>(args?: Subset<T, RecentActivity$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RecentActivity model
   */
  interface RecentActivityFieldRefs {
    readonly id: FieldRef<"RecentActivity", 'String'>
    readonly userId: FieldRef<"RecentActivity", 'String'>
    readonly userName: FieldRef<"RecentActivity", 'String'>
    readonly action: FieldRef<"RecentActivity", 'String'>
    readonly timestamp: FieldRef<"RecentActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RecentActivity findUnique
   */
  export type RecentActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecentActivity
     */
    select?: RecentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecentActivity
     */
    omit?: RecentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecentActivityInclude<ExtArgs> | null
    /**
     * Filter, which RecentActivity to fetch.
     */
    where: RecentActivityWhereUniqueInput
  }

  /**
   * RecentActivity findUniqueOrThrow
   */
  export type RecentActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecentActivity
     */
    select?: RecentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecentActivity
     */
    omit?: RecentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecentActivityInclude<ExtArgs> | null
    /**
     * Filter, which RecentActivity to fetch.
     */
    where: RecentActivityWhereUniqueInput
  }

  /**
   * RecentActivity findFirst
   */
  export type RecentActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecentActivity
     */
    select?: RecentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecentActivity
     */
    omit?: RecentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecentActivityInclude<ExtArgs> | null
    /**
     * Filter, which RecentActivity to fetch.
     */
    where?: RecentActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecentActivities to fetch.
     */
    orderBy?: RecentActivityOrderByWithRelationInput | RecentActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecentActivities.
     */
    cursor?: RecentActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecentActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecentActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecentActivities.
     */
    distinct?: RecentActivityScalarFieldEnum | RecentActivityScalarFieldEnum[]
  }

  /**
   * RecentActivity findFirstOrThrow
   */
  export type RecentActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecentActivity
     */
    select?: RecentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecentActivity
     */
    omit?: RecentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecentActivityInclude<ExtArgs> | null
    /**
     * Filter, which RecentActivity to fetch.
     */
    where?: RecentActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecentActivities to fetch.
     */
    orderBy?: RecentActivityOrderByWithRelationInput | RecentActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecentActivities.
     */
    cursor?: RecentActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecentActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecentActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecentActivities.
     */
    distinct?: RecentActivityScalarFieldEnum | RecentActivityScalarFieldEnum[]
  }

  /**
   * RecentActivity findMany
   */
  export type RecentActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecentActivity
     */
    select?: RecentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecentActivity
     */
    omit?: RecentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecentActivityInclude<ExtArgs> | null
    /**
     * Filter, which RecentActivities to fetch.
     */
    where?: RecentActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecentActivities to fetch.
     */
    orderBy?: RecentActivityOrderByWithRelationInput | RecentActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecentActivities.
     */
    cursor?: RecentActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecentActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecentActivities.
     */
    skip?: number
    distinct?: RecentActivityScalarFieldEnum | RecentActivityScalarFieldEnum[]
  }

  /**
   * RecentActivity create
   */
  export type RecentActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecentActivity
     */
    select?: RecentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecentActivity
     */
    omit?: RecentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecentActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a RecentActivity.
     */
    data: XOR<RecentActivityCreateInput, RecentActivityUncheckedCreateInput>
  }

  /**
   * RecentActivity createMany
   */
  export type RecentActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecentActivities.
     */
    data: RecentActivityCreateManyInput | RecentActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecentActivity createManyAndReturn
   */
  export type RecentActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecentActivity
     */
    select?: RecentActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecentActivity
     */
    omit?: RecentActivityOmit<ExtArgs> | null
    /**
     * The data used to create many RecentActivities.
     */
    data: RecentActivityCreateManyInput | RecentActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecentActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecentActivity update
   */
  export type RecentActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecentActivity
     */
    select?: RecentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecentActivity
     */
    omit?: RecentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecentActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a RecentActivity.
     */
    data: XOR<RecentActivityUpdateInput, RecentActivityUncheckedUpdateInput>
    /**
     * Choose, which RecentActivity to update.
     */
    where: RecentActivityWhereUniqueInput
  }

  /**
   * RecentActivity updateMany
   */
  export type RecentActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecentActivities.
     */
    data: XOR<RecentActivityUpdateManyMutationInput, RecentActivityUncheckedUpdateManyInput>
    /**
     * Filter which RecentActivities to update
     */
    where?: RecentActivityWhereInput
    /**
     * Limit how many RecentActivities to update.
     */
    limit?: number
  }

  /**
   * RecentActivity updateManyAndReturn
   */
  export type RecentActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecentActivity
     */
    select?: RecentActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecentActivity
     */
    omit?: RecentActivityOmit<ExtArgs> | null
    /**
     * The data used to update RecentActivities.
     */
    data: XOR<RecentActivityUpdateManyMutationInput, RecentActivityUncheckedUpdateManyInput>
    /**
     * Filter which RecentActivities to update
     */
    where?: RecentActivityWhereInput
    /**
     * Limit how many RecentActivities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecentActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecentActivity upsert
   */
  export type RecentActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecentActivity
     */
    select?: RecentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecentActivity
     */
    omit?: RecentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecentActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the RecentActivity to update in case it exists.
     */
    where: RecentActivityWhereUniqueInput
    /**
     * In case the RecentActivity found by the `where` argument doesn't exist, create a new RecentActivity with this data.
     */
    create: XOR<RecentActivityCreateInput, RecentActivityUncheckedCreateInput>
    /**
     * In case the RecentActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecentActivityUpdateInput, RecentActivityUncheckedUpdateInput>
  }

  /**
   * RecentActivity delete
   */
  export type RecentActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecentActivity
     */
    select?: RecentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecentActivity
     */
    omit?: RecentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecentActivityInclude<ExtArgs> | null
    /**
     * Filter which RecentActivity to delete.
     */
    where: RecentActivityWhereUniqueInput
  }

  /**
   * RecentActivity deleteMany
   */
  export type RecentActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecentActivities to delete
     */
    where?: RecentActivityWhereInput
    /**
     * Limit how many RecentActivities to delete.
     */
    limit?: number
  }

  /**
   * RecentActivity.user
   */
  export type RecentActivity$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * RecentActivity without action
   */
  export type RecentActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecentActivity
     */
    select?: RecentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecentActivity
     */
    omit?: RecentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecentActivityInclude<ExtArgs> | null
  }


  /**
   * Model SupportRequest
   */

  export type AggregateSupportRequest = {
    _count: SupportRequestCountAggregateOutputType | null
    _min: SupportRequestMinAggregateOutputType | null
    _max: SupportRequestMaxAggregateOutputType | null
  }

  export type SupportRequestMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    message: string | null
    createdAt: Date | null
  }

  export type SupportRequestMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    message: string | null
    createdAt: Date | null
  }

  export type SupportRequestCountAggregateOutputType = {
    id: number
    name: number
    email: number
    message: number
    createdAt: number
    _all: number
  }


  export type SupportRequestMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
    createdAt?: true
  }

  export type SupportRequestMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
    createdAt?: true
  }

  export type SupportRequestCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type SupportRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportRequest to aggregate.
     */
    where?: SupportRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportRequests to fetch.
     */
    orderBy?: SupportRequestOrderByWithRelationInput | SupportRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupportRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupportRequests
    **/
    _count?: true | SupportRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupportRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupportRequestMaxAggregateInputType
  }

  export type GetSupportRequestAggregateType<T extends SupportRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateSupportRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupportRequest[P]>
      : GetScalarType<T[P], AggregateSupportRequest[P]>
  }




  export type SupportRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportRequestWhereInput
    orderBy?: SupportRequestOrderByWithAggregationInput | SupportRequestOrderByWithAggregationInput[]
    by: SupportRequestScalarFieldEnum[] | SupportRequestScalarFieldEnum
    having?: SupportRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupportRequestCountAggregateInputType | true
    _min?: SupportRequestMinAggregateInputType
    _max?: SupportRequestMaxAggregateInputType
  }

  export type SupportRequestGroupByOutputType = {
    id: string
    name: string
    email: string
    message: string
    createdAt: Date
    _count: SupportRequestCountAggregateOutputType | null
    _min: SupportRequestMinAggregateOutputType | null
    _max: SupportRequestMaxAggregateOutputType | null
  }

  type GetSupportRequestGroupByPayload<T extends SupportRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupportRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupportRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupportRequestGroupByOutputType[P]>
            : GetScalarType<T[P], SupportRequestGroupByOutputType[P]>
        }
      >
    >


  export type SupportRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["supportRequest"]>

  export type SupportRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["supportRequest"]>

  export type SupportRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["supportRequest"]>

  export type SupportRequestSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type SupportRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "message" | "createdAt", ExtArgs["result"]["supportRequest"]>

  export type $SupportRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupportRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      message: string
      createdAt: Date
    }, ExtArgs["result"]["supportRequest"]>
    composites: {}
  }

  type SupportRequestGetPayload<S extends boolean | null | undefined | SupportRequestDefaultArgs> = $Result.GetResult<Prisma.$SupportRequestPayload, S>

  type SupportRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupportRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupportRequestCountAggregateInputType | true
    }

  export interface SupportRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupportRequest'], meta: { name: 'SupportRequest' } }
    /**
     * Find zero or one SupportRequest that matches the filter.
     * @param {SupportRequestFindUniqueArgs} args - Arguments to find a SupportRequest
     * @example
     * // Get one SupportRequest
     * const supportRequest = await prisma.supportRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupportRequestFindUniqueArgs>(args: SelectSubset<T, SupportRequestFindUniqueArgs<ExtArgs>>): Prisma__SupportRequestClient<$Result.GetResult<Prisma.$SupportRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SupportRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupportRequestFindUniqueOrThrowArgs} args - Arguments to find a SupportRequest
     * @example
     * // Get one SupportRequest
     * const supportRequest = await prisma.supportRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupportRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, SupportRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupportRequestClient<$Result.GetResult<Prisma.$SupportRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupportRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportRequestFindFirstArgs} args - Arguments to find a SupportRequest
     * @example
     * // Get one SupportRequest
     * const supportRequest = await prisma.supportRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupportRequestFindFirstArgs>(args?: SelectSubset<T, SupportRequestFindFirstArgs<ExtArgs>>): Prisma__SupportRequestClient<$Result.GetResult<Prisma.$SupportRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupportRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportRequestFindFirstOrThrowArgs} args - Arguments to find a SupportRequest
     * @example
     * // Get one SupportRequest
     * const supportRequest = await prisma.supportRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupportRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, SupportRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupportRequestClient<$Result.GetResult<Prisma.$SupportRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SupportRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupportRequests
     * const supportRequests = await prisma.supportRequest.findMany()
     * 
     * // Get first 10 SupportRequests
     * const supportRequests = await prisma.supportRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supportRequestWithIdOnly = await prisma.supportRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupportRequestFindManyArgs>(args?: SelectSubset<T, SupportRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SupportRequest.
     * @param {SupportRequestCreateArgs} args - Arguments to create a SupportRequest.
     * @example
     * // Create one SupportRequest
     * const SupportRequest = await prisma.supportRequest.create({
     *   data: {
     *     // ... data to create a SupportRequest
     *   }
     * })
     * 
     */
    create<T extends SupportRequestCreateArgs>(args: SelectSubset<T, SupportRequestCreateArgs<ExtArgs>>): Prisma__SupportRequestClient<$Result.GetResult<Prisma.$SupportRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SupportRequests.
     * @param {SupportRequestCreateManyArgs} args - Arguments to create many SupportRequests.
     * @example
     * // Create many SupportRequests
     * const supportRequest = await prisma.supportRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupportRequestCreateManyArgs>(args?: SelectSubset<T, SupportRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupportRequests and returns the data saved in the database.
     * @param {SupportRequestCreateManyAndReturnArgs} args - Arguments to create many SupportRequests.
     * @example
     * // Create many SupportRequests
     * const supportRequest = await prisma.supportRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupportRequests and only return the `id`
     * const supportRequestWithIdOnly = await prisma.supportRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupportRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, SupportRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SupportRequest.
     * @param {SupportRequestDeleteArgs} args - Arguments to delete one SupportRequest.
     * @example
     * // Delete one SupportRequest
     * const SupportRequest = await prisma.supportRequest.delete({
     *   where: {
     *     // ... filter to delete one SupportRequest
     *   }
     * })
     * 
     */
    delete<T extends SupportRequestDeleteArgs>(args: SelectSubset<T, SupportRequestDeleteArgs<ExtArgs>>): Prisma__SupportRequestClient<$Result.GetResult<Prisma.$SupportRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SupportRequest.
     * @param {SupportRequestUpdateArgs} args - Arguments to update one SupportRequest.
     * @example
     * // Update one SupportRequest
     * const supportRequest = await prisma.supportRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupportRequestUpdateArgs>(args: SelectSubset<T, SupportRequestUpdateArgs<ExtArgs>>): Prisma__SupportRequestClient<$Result.GetResult<Prisma.$SupportRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SupportRequests.
     * @param {SupportRequestDeleteManyArgs} args - Arguments to filter SupportRequests to delete.
     * @example
     * // Delete a few SupportRequests
     * const { count } = await prisma.supportRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupportRequestDeleteManyArgs>(args?: SelectSubset<T, SupportRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupportRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupportRequests
     * const supportRequest = await prisma.supportRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupportRequestUpdateManyArgs>(args: SelectSubset<T, SupportRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupportRequests and returns the data updated in the database.
     * @param {SupportRequestUpdateManyAndReturnArgs} args - Arguments to update many SupportRequests.
     * @example
     * // Update many SupportRequests
     * const supportRequest = await prisma.supportRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SupportRequests and only return the `id`
     * const supportRequestWithIdOnly = await prisma.supportRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SupportRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, SupportRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SupportRequest.
     * @param {SupportRequestUpsertArgs} args - Arguments to update or create a SupportRequest.
     * @example
     * // Update or create a SupportRequest
     * const supportRequest = await prisma.supportRequest.upsert({
     *   create: {
     *     // ... data to create a SupportRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupportRequest we want to update
     *   }
     * })
     */
    upsert<T extends SupportRequestUpsertArgs>(args: SelectSubset<T, SupportRequestUpsertArgs<ExtArgs>>): Prisma__SupportRequestClient<$Result.GetResult<Prisma.$SupportRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SupportRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportRequestCountArgs} args - Arguments to filter SupportRequests to count.
     * @example
     * // Count the number of SupportRequests
     * const count = await prisma.supportRequest.count({
     *   where: {
     *     // ... the filter for the SupportRequests we want to count
     *   }
     * })
    **/
    count<T extends SupportRequestCountArgs>(
      args?: Subset<T, SupportRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupportRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupportRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupportRequestAggregateArgs>(args: Subset<T, SupportRequestAggregateArgs>): Prisma.PrismaPromise<GetSupportRequestAggregateType<T>>

    /**
     * Group by SupportRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportRequestGroupByArgs} args - Group by arguments.
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
      T extends SupportRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupportRequestGroupByArgs['orderBy'] }
        : { orderBy?: SupportRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupportRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupportRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupportRequest model
   */
  readonly fields: SupportRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupportRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupportRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SupportRequest model
   */
  interface SupportRequestFieldRefs {
    readonly id: FieldRef<"SupportRequest", 'String'>
    readonly name: FieldRef<"SupportRequest", 'String'>
    readonly email: FieldRef<"SupportRequest", 'String'>
    readonly message: FieldRef<"SupportRequest", 'String'>
    readonly createdAt: FieldRef<"SupportRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupportRequest findUnique
   */
  export type SupportRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportRequest
     */
    select?: SupportRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportRequest
     */
    omit?: SupportRequestOmit<ExtArgs> | null
    /**
     * Filter, which SupportRequest to fetch.
     */
    where: SupportRequestWhereUniqueInput
  }

  /**
   * SupportRequest findUniqueOrThrow
   */
  export type SupportRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportRequest
     */
    select?: SupportRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportRequest
     */
    omit?: SupportRequestOmit<ExtArgs> | null
    /**
     * Filter, which SupportRequest to fetch.
     */
    where: SupportRequestWhereUniqueInput
  }

  /**
   * SupportRequest findFirst
   */
  export type SupportRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportRequest
     */
    select?: SupportRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportRequest
     */
    omit?: SupportRequestOmit<ExtArgs> | null
    /**
     * Filter, which SupportRequest to fetch.
     */
    where?: SupportRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportRequests to fetch.
     */
    orderBy?: SupportRequestOrderByWithRelationInput | SupportRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportRequests.
     */
    cursor?: SupportRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportRequests.
     */
    distinct?: SupportRequestScalarFieldEnum | SupportRequestScalarFieldEnum[]
  }

  /**
   * SupportRequest findFirstOrThrow
   */
  export type SupportRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportRequest
     */
    select?: SupportRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportRequest
     */
    omit?: SupportRequestOmit<ExtArgs> | null
    /**
     * Filter, which SupportRequest to fetch.
     */
    where?: SupportRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportRequests to fetch.
     */
    orderBy?: SupportRequestOrderByWithRelationInput | SupportRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportRequests.
     */
    cursor?: SupportRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportRequests.
     */
    distinct?: SupportRequestScalarFieldEnum | SupportRequestScalarFieldEnum[]
  }

  /**
   * SupportRequest findMany
   */
  export type SupportRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportRequest
     */
    select?: SupportRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportRequest
     */
    omit?: SupportRequestOmit<ExtArgs> | null
    /**
     * Filter, which SupportRequests to fetch.
     */
    where?: SupportRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportRequests to fetch.
     */
    orderBy?: SupportRequestOrderByWithRelationInput | SupportRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupportRequests.
     */
    cursor?: SupportRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportRequests.
     */
    skip?: number
    distinct?: SupportRequestScalarFieldEnum | SupportRequestScalarFieldEnum[]
  }

  /**
   * SupportRequest create
   */
  export type SupportRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportRequest
     */
    select?: SupportRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportRequest
     */
    omit?: SupportRequestOmit<ExtArgs> | null
    /**
     * The data needed to create a SupportRequest.
     */
    data: XOR<SupportRequestCreateInput, SupportRequestUncheckedCreateInput>
  }

  /**
   * SupportRequest createMany
   */
  export type SupportRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupportRequests.
     */
    data: SupportRequestCreateManyInput | SupportRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupportRequest createManyAndReturn
   */
  export type SupportRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportRequest
     */
    select?: SupportRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupportRequest
     */
    omit?: SupportRequestOmit<ExtArgs> | null
    /**
     * The data used to create many SupportRequests.
     */
    data: SupportRequestCreateManyInput | SupportRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupportRequest update
   */
  export type SupportRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportRequest
     */
    select?: SupportRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportRequest
     */
    omit?: SupportRequestOmit<ExtArgs> | null
    /**
     * The data needed to update a SupportRequest.
     */
    data: XOR<SupportRequestUpdateInput, SupportRequestUncheckedUpdateInput>
    /**
     * Choose, which SupportRequest to update.
     */
    where: SupportRequestWhereUniqueInput
  }

  /**
   * SupportRequest updateMany
   */
  export type SupportRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupportRequests.
     */
    data: XOR<SupportRequestUpdateManyMutationInput, SupportRequestUncheckedUpdateManyInput>
    /**
     * Filter which SupportRequests to update
     */
    where?: SupportRequestWhereInput
    /**
     * Limit how many SupportRequests to update.
     */
    limit?: number
  }

  /**
   * SupportRequest updateManyAndReturn
   */
  export type SupportRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportRequest
     */
    select?: SupportRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupportRequest
     */
    omit?: SupportRequestOmit<ExtArgs> | null
    /**
     * The data used to update SupportRequests.
     */
    data: XOR<SupportRequestUpdateManyMutationInput, SupportRequestUncheckedUpdateManyInput>
    /**
     * Filter which SupportRequests to update
     */
    where?: SupportRequestWhereInput
    /**
     * Limit how many SupportRequests to update.
     */
    limit?: number
  }

  /**
   * SupportRequest upsert
   */
  export type SupportRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportRequest
     */
    select?: SupportRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportRequest
     */
    omit?: SupportRequestOmit<ExtArgs> | null
    /**
     * The filter to search for the SupportRequest to update in case it exists.
     */
    where: SupportRequestWhereUniqueInput
    /**
     * In case the SupportRequest found by the `where` argument doesn't exist, create a new SupportRequest with this data.
     */
    create: XOR<SupportRequestCreateInput, SupportRequestUncheckedCreateInput>
    /**
     * In case the SupportRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupportRequestUpdateInput, SupportRequestUncheckedUpdateInput>
  }

  /**
   * SupportRequest delete
   */
  export type SupportRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportRequest
     */
    select?: SupportRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportRequest
     */
    omit?: SupportRequestOmit<ExtArgs> | null
    /**
     * Filter which SupportRequest to delete.
     */
    where: SupportRequestWhereUniqueInput
  }

  /**
   * SupportRequest deleteMany
   */
  export type SupportRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportRequests to delete
     */
    where?: SupportRequestWhereInput
    /**
     * Limit how many SupportRequests to delete.
     */
    limit?: number
  }

  /**
   * SupportRequest without action
   */
  export type SupportRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportRequest
     */
    select?: SupportRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportRequest
     */
    omit?: SupportRequestOmit<ExtArgs> | null
  }


  /**
   * Model PlanConfig
   */

  export type AggregatePlanConfig = {
    _count: PlanConfigCountAggregateOutputType | null
    _avg: PlanConfigAvgAggregateOutputType | null
    _sum: PlanConfigSumAggregateOutputType | null
    _min: PlanConfigMinAggregateOutputType | null
    _max: PlanConfigMaxAggregateOutputType | null
  }

  export type PlanConfigAvgAggregateOutputType = {
    price: number | null
  }

  export type PlanConfigSumAggregateOutputType = {
    price: number | null
  }

  export type PlanConfigMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanConfigMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanConfigCountAggregateOutputType = {
    id: number
    name: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlanConfigAvgAggregateInputType = {
    price?: true
  }

  export type PlanConfigSumAggregateInputType = {
    price?: true
  }

  export type PlanConfigMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanConfigMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanConfigCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlanConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanConfig to aggregate.
     */
    where?: PlanConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanConfigs to fetch.
     */
    orderBy?: PlanConfigOrderByWithRelationInput | PlanConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlanConfigs
    **/
    _count?: true | PlanConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanConfigMaxAggregateInputType
  }

  export type GetPlanConfigAggregateType<T extends PlanConfigAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanConfig[P]>
      : GetScalarType<T[P], AggregatePlanConfig[P]>
  }




  export type PlanConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanConfigWhereInput
    orderBy?: PlanConfigOrderByWithAggregationInput | PlanConfigOrderByWithAggregationInput[]
    by: PlanConfigScalarFieldEnum[] | PlanConfigScalarFieldEnum
    having?: PlanConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanConfigCountAggregateInputType | true
    _avg?: PlanConfigAvgAggregateInputType
    _sum?: PlanConfigSumAggregateInputType
    _min?: PlanConfigMinAggregateInputType
    _max?: PlanConfigMaxAggregateInputType
  }

  export type PlanConfigGroupByOutputType = {
    id: string
    name: string
    price: number
    createdAt: Date
    updatedAt: Date
    _count: PlanConfigCountAggregateOutputType | null
    _avg: PlanConfigAvgAggregateOutputType | null
    _sum: PlanConfigSumAggregateOutputType | null
    _min: PlanConfigMinAggregateOutputType | null
    _max: PlanConfigMaxAggregateOutputType | null
  }

  type GetPlanConfigGroupByPayload<T extends PlanConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanConfigGroupByOutputType[P]>
            : GetScalarType<T[P], PlanConfigGroupByOutputType[P]>
        }
      >
    >


  export type PlanConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["planConfig"]>

  export type PlanConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["planConfig"]>

  export type PlanConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["planConfig"]>

  export type PlanConfigSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlanConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "createdAt" | "updatedAt", ExtArgs["result"]["planConfig"]>

  export type $PlanConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlanConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["planConfig"]>
    composites: {}
  }

  type PlanConfigGetPayload<S extends boolean | null | undefined | PlanConfigDefaultArgs> = $Result.GetResult<Prisma.$PlanConfigPayload, S>

  type PlanConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanConfigCountAggregateInputType | true
    }

  export interface PlanConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlanConfig'], meta: { name: 'PlanConfig' } }
    /**
     * Find zero or one PlanConfig that matches the filter.
     * @param {PlanConfigFindUniqueArgs} args - Arguments to find a PlanConfig
     * @example
     * // Get one PlanConfig
     * const planConfig = await prisma.planConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanConfigFindUniqueArgs>(args: SelectSubset<T, PlanConfigFindUniqueArgs<ExtArgs>>): Prisma__PlanConfigClient<$Result.GetResult<Prisma.$PlanConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlanConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanConfigFindUniqueOrThrowArgs} args - Arguments to find a PlanConfig
     * @example
     * // Get one PlanConfig
     * const planConfig = await prisma.planConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanConfigClient<$Result.GetResult<Prisma.$PlanConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanConfigFindFirstArgs} args - Arguments to find a PlanConfig
     * @example
     * // Get one PlanConfig
     * const planConfig = await prisma.planConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanConfigFindFirstArgs>(args?: SelectSubset<T, PlanConfigFindFirstArgs<ExtArgs>>): Prisma__PlanConfigClient<$Result.GetResult<Prisma.$PlanConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanConfigFindFirstOrThrowArgs} args - Arguments to find a PlanConfig
     * @example
     * // Get one PlanConfig
     * const planConfig = await prisma.planConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanConfigClient<$Result.GetResult<Prisma.$PlanConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlanConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlanConfigs
     * const planConfigs = await prisma.planConfig.findMany()
     * 
     * // Get first 10 PlanConfigs
     * const planConfigs = await prisma.planConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planConfigWithIdOnly = await prisma.planConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanConfigFindManyArgs>(args?: SelectSubset<T, PlanConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlanConfig.
     * @param {PlanConfigCreateArgs} args - Arguments to create a PlanConfig.
     * @example
     * // Create one PlanConfig
     * const PlanConfig = await prisma.planConfig.create({
     *   data: {
     *     // ... data to create a PlanConfig
     *   }
     * })
     * 
     */
    create<T extends PlanConfigCreateArgs>(args: SelectSubset<T, PlanConfigCreateArgs<ExtArgs>>): Prisma__PlanConfigClient<$Result.GetResult<Prisma.$PlanConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlanConfigs.
     * @param {PlanConfigCreateManyArgs} args - Arguments to create many PlanConfigs.
     * @example
     * // Create many PlanConfigs
     * const planConfig = await prisma.planConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanConfigCreateManyArgs>(args?: SelectSubset<T, PlanConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlanConfigs and returns the data saved in the database.
     * @param {PlanConfigCreateManyAndReturnArgs} args - Arguments to create many PlanConfigs.
     * @example
     * // Create many PlanConfigs
     * const planConfig = await prisma.planConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlanConfigs and only return the `id`
     * const planConfigWithIdOnly = await prisma.planConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlanConfig.
     * @param {PlanConfigDeleteArgs} args - Arguments to delete one PlanConfig.
     * @example
     * // Delete one PlanConfig
     * const PlanConfig = await prisma.planConfig.delete({
     *   where: {
     *     // ... filter to delete one PlanConfig
     *   }
     * })
     * 
     */
    delete<T extends PlanConfigDeleteArgs>(args: SelectSubset<T, PlanConfigDeleteArgs<ExtArgs>>): Prisma__PlanConfigClient<$Result.GetResult<Prisma.$PlanConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlanConfig.
     * @param {PlanConfigUpdateArgs} args - Arguments to update one PlanConfig.
     * @example
     * // Update one PlanConfig
     * const planConfig = await prisma.planConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanConfigUpdateArgs>(args: SelectSubset<T, PlanConfigUpdateArgs<ExtArgs>>): Prisma__PlanConfigClient<$Result.GetResult<Prisma.$PlanConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlanConfigs.
     * @param {PlanConfigDeleteManyArgs} args - Arguments to filter PlanConfigs to delete.
     * @example
     * // Delete a few PlanConfigs
     * const { count } = await prisma.planConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanConfigDeleteManyArgs>(args?: SelectSubset<T, PlanConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlanConfigs
     * const planConfig = await prisma.planConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanConfigUpdateManyArgs>(args: SelectSubset<T, PlanConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanConfigs and returns the data updated in the database.
     * @param {PlanConfigUpdateManyAndReturnArgs} args - Arguments to update many PlanConfigs.
     * @example
     * // Update many PlanConfigs
     * const planConfig = await prisma.planConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlanConfigs and only return the `id`
     * const planConfigWithIdOnly = await prisma.planConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlanConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlanConfig.
     * @param {PlanConfigUpsertArgs} args - Arguments to update or create a PlanConfig.
     * @example
     * // Update or create a PlanConfig
     * const planConfig = await prisma.planConfig.upsert({
     *   create: {
     *     // ... data to create a PlanConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlanConfig we want to update
     *   }
     * })
     */
    upsert<T extends PlanConfigUpsertArgs>(args: SelectSubset<T, PlanConfigUpsertArgs<ExtArgs>>): Prisma__PlanConfigClient<$Result.GetResult<Prisma.$PlanConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlanConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanConfigCountArgs} args - Arguments to filter PlanConfigs to count.
     * @example
     * // Count the number of PlanConfigs
     * const count = await prisma.planConfig.count({
     *   where: {
     *     // ... the filter for the PlanConfigs we want to count
     *   }
     * })
    **/
    count<T extends PlanConfigCountArgs>(
      args?: Subset<T, PlanConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlanConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanConfigAggregateArgs>(args: Subset<T, PlanConfigAggregateArgs>): Prisma.PrismaPromise<GetPlanConfigAggregateType<T>>

    /**
     * Group by PlanConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanConfigGroupByArgs} args - Group by arguments.
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
      T extends PlanConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanConfigGroupByArgs['orderBy'] }
        : { orderBy?: PlanConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlanConfig model
   */
  readonly fields: PlanConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlanConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the PlanConfig model
   */
  interface PlanConfigFieldRefs {
    readonly id: FieldRef<"PlanConfig", 'String'>
    readonly name: FieldRef<"PlanConfig", 'String'>
    readonly price: FieldRef<"PlanConfig", 'Int'>
    readonly createdAt: FieldRef<"PlanConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"PlanConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlanConfig findUnique
   */
  export type PlanConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanConfig
     */
    select?: PlanConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanConfig
     */
    omit?: PlanConfigOmit<ExtArgs> | null
    /**
     * Filter, which PlanConfig to fetch.
     */
    where: PlanConfigWhereUniqueInput
  }

  /**
   * PlanConfig findUniqueOrThrow
   */
  export type PlanConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanConfig
     */
    select?: PlanConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanConfig
     */
    omit?: PlanConfigOmit<ExtArgs> | null
    /**
     * Filter, which PlanConfig to fetch.
     */
    where: PlanConfigWhereUniqueInput
  }

  /**
   * PlanConfig findFirst
   */
  export type PlanConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanConfig
     */
    select?: PlanConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanConfig
     */
    omit?: PlanConfigOmit<ExtArgs> | null
    /**
     * Filter, which PlanConfig to fetch.
     */
    where?: PlanConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanConfigs to fetch.
     */
    orderBy?: PlanConfigOrderByWithRelationInput | PlanConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanConfigs.
     */
    cursor?: PlanConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanConfigs.
     */
    distinct?: PlanConfigScalarFieldEnum | PlanConfigScalarFieldEnum[]
  }

  /**
   * PlanConfig findFirstOrThrow
   */
  export type PlanConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanConfig
     */
    select?: PlanConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanConfig
     */
    omit?: PlanConfigOmit<ExtArgs> | null
    /**
     * Filter, which PlanConfig to fetch.
     */
    where?: PlanConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanConfigs to fetch.
     */
    orderBy?: PlanConfigOrderByWithRelationInput | PlanConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanConfigs.
     */
    cursor?: PlanConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanConfigs.
     */
    distinct?: PlanConfigScalarFieldEnum | PlanConfigScalarFieldEnum[]
  }

  /**
   * PlanConfig findMany
   */
  export type PlanConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanConfig
     */
    select?: PlanConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanConfig
     */
    omit?: PlanConfigOmit<ExtArgs> | null
    /**
     * Filter, which PlanConfigs to fetch.
     */
    where?: PlanConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanConfigs to fetch.
     */
    orderBy?: PlanConfigOrderByWithRelationInput | PlanConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlanConfigs.
     */
    cursor?: PlanConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanConfigs.
     */
    skip?: number
    distinct?: PlanConfigScalarFieldEnum | PlanConfigScalarFieldEnum[]
  }

  /**
   * PlanConfig create
   */
  export type PlanConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanConfig
     */
    select?: PlanConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanConfig
     */
    omit?: PlanConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a PlanConfig.
     */
    data: XOR<PlanConfigCreateInput, PlanConfigUncheckedCreateInput>
  }

  /**
   * PlanConfig createMany
   */
  export type PlanConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlanConfigs.
     */
    data: PlanConfigCreateManyInput | PlanConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlanConfig createManyAndReturn
   */
  export type PlanConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanConfig
     */
    select?: PlanConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanConfig
     */
    omit?: PlanConfigOmit<ExtArgs> | null
    /**
     * The data used to create many PlanConfigs.
     */
    data: PlanConfigCreateManyInput | PlanConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlanConfig update
   */
  export type PlanConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanConfig
     */
    select?: PlanConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanConfig
     */
    omit?: PlanConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a PlanConfig.
     */
    data: XOR<PlanConfigUpdateInput, PlanConfigUncheckedUpdateInput>
    /**
     * Choose, which PlanConfig to update.
     */
    where: PlanConfigWhereUniqueInput
  }

  /**
   * PlanConfig updateMany
   */
  export type PlanConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlanConfigs.
     */
    data: XOR<PlanConfigUpdateManyMutationInput, PlanConfigUncheckedUpdateManyInput>
    /**
     * Filter which PlanConfigs to update
     */
    where?: PlanConfigWhereInput
    /**
     * Limit how many PlanConfigs to update.
     */
    limit?: number
  }

  /**
   * PlanConfig updateManyAndReturn
   */
  export type PlanConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanConfig
     */
    select?: PlanConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanConfig
     */
    omit?: PlanConfigOmit<ExtArgs> | null
    /**
     * The data used to update PlanConfigs.
     */
    data: XOR<PlanConfigUpdateManyMutationInput, PlanConfigUncheckedUpdateManyInput>
    /**
     * Filter which PlanConfigs to update
     */
    where?: PlanConfigWhereInput
    /**
     * Limit how many PlanConfigs to update.
     */
    limit?: number
  }

  /**
   * PlanConfig upsert
   */
  export type PlanConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanConfig
     */
    select?: PlanConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanConfig
     */
    omit?: PlanConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the PlanConfig to update in case it exists.
     */
    where: PlanConfigWhereUniqueInput
    /**
     * In case the PlanConfig found by the `where` argument doesn't exist, create a new PlanConfig with this data.
     */
    create: XOR<PlanConfigCreateInput, PlanConfigUncheckedCreateInput>
    /**
     * In case the PlanConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanConfigUpdateInput, PlanConfigUncheckedUpdateInput>
  }

  /**
   * PlanConfig delete
   */
  export type PlanConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanConfig
     */
    select?: PlanConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanConfig
     */
    omit?: PlanConfigOmit<ExtArgs> | null
    /**
     * Filter which PlanConfig to delete.
     */
    where: PlanConfigWhereUniqueInput
  }

  /**
   * PlanConfig deleteMany
   */
  export type PlanConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanConfigs to delete
     */
    where?: PlanConfigWhereInput
    /**
     * Limit how many PlanConfigs to delete.
     */
    limit?: number
  }

  /**
   * PlanConfig without action
   */
  export type PlanConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanConfig
     */
    select?: PlanConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanConfig
     */
    omit?: PlanConfigOmit<ExtArgs> | null
  }


  /**
   * Model ClassSession
   */

  export type AggregateClassSession = {
    _count: ClassSessionCountAggregateOutputType | null
    _avg: ClassSessionAvgAggregateOutputType | null
    _sum: ClassSessionSumAggregateOutputType | null
    _min: ClassSessionMinAggregateOutputType | null
    _max: ClassSessionMaxAggregateOutputType | null
  }

  export type ClassSessionAvgAggregateOutputType = {
    semester: number | null
  }

  export type ClassSessionSumAggregateOutputType = {
    semester: number | null
  }

  export type ClassSessionMinAggregateOutputType = {
    id: string | null
    subjectId: string | null
    section: string | null
    semester: number | null
    weekday: $Enums.Weekday | null
    room: string | null
    startTime: Date | null
    endTime: Date | null
    teacherId: string | null
    status: $Enums.SessionStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassSessionMaxAggregateOutputType = {
    id: string | null
    subjectId: string | null
    section: string | null
    semester: number | null
    weekday: $Enums.Weekday | null
    room: string | null
    startTime: Date | null
    endTime: Date | null
    teacherId: string | null
    status: $Enums.SessionStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassSessionCountAggregateOutputType = {
    id: number
    subjectId: number
    section: number
    semester: number
    weekday: number
    room: number
    startTime: number
    endTime: number
    teacherId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClassSessionAvgAggregateInputType = {
    semester?: true
  }

  export type ClassSessionSumAggregateInputType = {
    semester?: true
  }

  export type ClassSessionMinAggregateInputType = {
    id?: true
    subjectId?: true
    section?: true
    semester?: true
    weekday?: true
    room?: true
    startTime?: true
    endTime?: true
    teacherId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassSessionMaxAggregateInputType = {
    id?: true
    subjectId?: true
    section?: true
    semester?: true
    weekday?: true
    room?: true
    startTime?: true
    endTime?: true
    teacherId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassSessionCountAggregateInputType = {
    id?: true
    subjectId?: true
    section?: true
    semester?: true
    weekday?: true
    room?: true
    startTime?: true
    endTime?: true
    teacherId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClassSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassSession to aggregate.
     */
    where?: ClassSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSessions to fetch.
     */
    orderBy?: ClassSessionOrderByWithRelationInput | ClassSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassSessions
    **/
    _count?: true | ClassSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassSessionMaxAggregateInputType
  }

  export type GetClassSessionAggregateType<T extends ClassSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateClassSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassSession[P]>
      : GetScalarType<T[P], AggregateClassSession[P]>
  }




  export type ClassSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassSessionWhereInput
    orderBy?: ClassSessionOrderByWithAggregationInput | ClassSessionOrderByWithAggregationInput[]
    by: ClassSessionScalarFieldEnum[] | ClassSessionScalarFieldEnum
    having?: ClassSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassSessionCountAggregateInputType | true
    _avg?: ClassSessionAvgAggregateInputType
    _sum?: ClassSessionSumAggregateInputType
    _min?: ClassSessionMinAggregateInputType
    _max?: ClassSessionMaxAggregateInputType
  }

  export type ClassSessionGroupByOutputType = {
    id: string
    subjectId: string
    section: string
    semester: number
    weekday: $Enums.Weekday
    room: string | null
    startTime: Date
    endTime: Date
    teacherId: string
    status: $Enums.SessionStatus
    createdAt: Date
    updatedAt: Date
    _count: ClassSessionCountAggregateOutputType | null
    _avg: ClassSessionAvgAggregateOutputType | null
    _sum: ClassSessionSumAggregateOutputType | null
    _min: ClassSessionMinAggregateOutputType | null
    _max: ClassSessionMaxAggregateOutputType | null
  }

  type GetClassSessionGroupByPayload<T extends ClassSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ClassSessionGroupByOutputType[P]>
        }
      >
    >


  export type ClassSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectId?: boolean
    section?: boolean
    semester?: boolean
    weekday?: boolean
    room?: boolean
    startTime?: boolean
    endTime?: boolean
    teacherId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classSession"]>

  export type ClassSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectId?: boolean
    section?: boolean
    semester?: boolean
    weekday?: boolean
    room?: boolean
    startTime?: boolean
    endTime?: boolean
    teacherId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classSession"]>

  export type ClassSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectId?: boolean
    section?: boolean
    semester?: boolean
    weekday?: boolean
    room?: boolean
    startTime?: boolean
    endTime?: boolean
    teacherId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classSession"]>

  export type ClassSessionSelectScalar = {
    id?: boolean
    subjectId?: boolean
    section?: boolean
    semester?: boolean
    weekday?: boolean
    room?: boolean
    startTime?: boolean
    endTime?: boolean
    teacherId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClassSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subjectId" | "section" | "semester" | "weekday" | "room" | "startTime" | "endTime" | "teacherId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["classSession"]>
  export type ClassSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }
  export type ClassSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }
  export type ClassSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }

  export type $ClassSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassSession"
    objects: {
      subject: Prisma.$SubjectPayload<ExtArgs>
      teacher: Prisma.$TeacherPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subjectId: string
      section: string
      semester: number
      weekday: $Enums.Weekday
      room: string | null
      startTime: Date
      endTime: Date
      teacherId: string
      status: $Enums.SessionStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["classSession"]>
    composites: {}
  }

  type ClassSessionGetPayload<S extends boolean | null | undefined | ClassSessionDefaultArgs> = $Result.GetResult<Prisma.$ClassSessionPayload, S>

  type ClassSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassSessionCountAggregateInputType | true
    }

  export interface ClassSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassSession'], meta: { name: 'ClassSession' } }
    /**
     * Find zero or one ClassSession that matches the filter.
     * @param {ClassSessionFindUniqueArgs} args - Arguments to find a ClassSession
     * @example
     * // Get one ClassSession
     * const classSession = await prisma.classSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassSessionFindUniqueArgs>(args: SelectSubset<T, ClassSessionFindUniqueArgs<ExtArgs>>): Prisma__ClassSessionClient<$Result.GetResult<Prisma.$ClassSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClassSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassSessionFindUniqueOrThrowArgs} args - Arguments to find a ClassSession
     * @example
     * // Get one ClassSession
     * const classSession = await prisma.classSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassSessionClient<$Result.GetResult<Prisma.$ClassSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSessionFindFirstArgs} args - Arguments to find a ClassSession
     * @example
     * // Get one ClassSession
     * const classSession = await prisma.classSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassSessionFindFirstArgs>(args?: SelectSubset<T, ClassSessionFindFirstArgs<ExtArgs>>): Prisma__ClassSessionClient<$Result.GetResult<Prisma.$ClassSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSessionFindFirstOrThrowArgs} args - Arguments to find a ClassSession
     * @example
     * // Get one ClassSession
     * const classSession = await prisma.classSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassSessionClient<$Result.GetResult<Prisma.$ClassSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClassSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassSessions
     * const classSessions = await prisma.classSession.findMany()
     * 
     * // Get first 10 ClassSessions
     * const classSessions = await prisma.classSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classSessionWithIdOnly = await prisma.classSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassSessionFindManyArgs>(args?: SelectSubset<T, ClassSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClassSession.
     * @param {ClassSessionCreateArgs} args - Arguments to create a ClassSession.
     * @example
     * // Create one ClassSession
     * const ClassSession = await prisma.classSession.create({
     *   data: {
     *     // ... data to create a ClassSession
     *   }
     * })
     * 
     */
    create<T extends ClassSessionCreateArgs>(args: SelectSubset<T, ClassSessionCreateArgs<ExtArgs>>): Prisma__ClassSessionClient<$Result.GetResult<Prisma.$ClassSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClassSessions.
     * @param {ClassSessionCreateManyArgs} args - Arguments to create many ClassSessions.
     * @example
     * // Create many ClassSessions
     * const classSession = await prisma.classSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassSessionCreateManyArgs>(args?: SelectSubset<T, ClassSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClassSessions and returns the data saved in the database.
     * @param {ClassSessionCreateManyAndReturnArgs} args - Arguments to create many ClassSessions.
     * @example
     * // Create many ClassSessions
     * const classSession = await prisma.classSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClassSessions and only return the `id`
     * const classSessionWithIdOnly = await prisma.classSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClassSession.
     * @param {ClassSessionDeleteArgs} args - Arguments to delete one ClassSession.
     * @example
     * // Delete one ClassSession
     * const ClassSession = await prisma.classSession.delete({
     *   where: {
     *     // ... filter to delete one ClassSession
     *   }
     * })
     * 
     */
    delete<T extends ClassSessionDeleteArgs>(args: SelectSubset<T, ClassSessionDeleteArgs<ExtArgs>>): Prisma__ClassSessionClient<$Result.GetResult<Prisma.$ClassSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClassSession.
     * @param {ClassSessionUpdateArgs} args - Arguments to update one ClassSession.
     * @example
     * // Update one ClassSession
     * const classSession = await prisma.classSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassSessionUpdateArgs>(args: SelectSubset<T, ClassSessionUpdateArgs<ExtArgs>>): Prisma__ClassSessionClient<$Result.GetResult<Prisma.$ClassSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClassSessions.
     * @param {ClassSessionDeleteManyArgs} args - Arguments to filter ClassSessions to delete.
     * @example
     * // Delete a few ClassSessions
     * const { count } = await prisma.classSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassSessionDeleteManyArgs>(args?: SelectSubset<T, ClassSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassSessions
     * const classSession = await prisma.classSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassSessionUpdateManyArgs>(args: SelectSubset<T, ClassSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassSessions and returns the data updated in the database.
     * @param {ClassSessionUpdateManyAndReturnArgs} args - Arguments to update many ClassSessions.
     * @example
     * // Update many ClassSessions
     * const classSession = await prisma.classSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClassSessions and only return the `id`
     * const classSessionWithIdOnly = await prisma.classSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClassSession.
     * @param {ClassSessionUpsertArgs} args - Arguments to update or create a ClassSession.
     * @example
     * // Update or create a ClassSession
     * const classSession = await prisma.classSession.upsert({
     *   create: {
     *     // ... data to create a ClassSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassSession we want to update
     *   }
     * })
     */
    upsert<T extends ClassSessionUpsertArgs>(args: SelectSubset<T, ClassSessionUpsertArgs<ExtArgs>>): Prisma__ClassSessionClient<$Result.GetResult<Prisma.$ClassSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClassSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSessionCountArgs} args - Arguments to filter ClassSessions to count.
     * @example
     * // Count the number of ClassSessions
     * const count = await prisma.classSession.count({
     *   where: {
     *     // ... the filter for the ClassSessions we want to count
     *   }
     * })
    **/
    count<T extends ClassSessionCountArgs>(
      args?: Subset<T, ClassSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassSessionAggregateArgs>(args: Subset<T, ClassSessionAggregateArgs>): Prisma.PrismaPromise<GetClassSessionAggregateType<T>>

    /**
     * Group by ClassSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassSessionGroupByArgs} args - Group by arguments.
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
      T extends ClassSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassSessionGroupByArgs['orderBy'] }
        : { orderBy?: ClassSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassSession model
   */
  readonly fields: ClassSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ClassSession model
   */
  interface ClassSessionFieldRefs {
    readonly id: FieldRef<"ClassSession", 'String'>
    readonly subjectId: FieldRef<"ClassSession", 'String'>
    readonly section: FieldRef<"ClassSession", 'String'>
    readonly semester: FieldRef<"ClassSession", 'Int'>
    readonly weekday: FieldRef<"ClassSession", 'Weekday'>
    readonly room: FieldRef<"ClassSession", 'String'>
    readonly startTime: FieldRef<"ClassSession", 'DateTime'>
    readonly endTime: FieldRef<"ClassSession", 'DateTime'>
    readonly teacherId: FieldRef<"ClassSession", 'String'>
    readonly status: FieldRef<"ClassSession", 'SessionStatus'>
    readonly createdAt: FieldRef<"ClassSession", 'DateTime'>
    readonly updatedAt: FieldRef<"ClassSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClassSession findUnique
   */
  export type ClassSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSession
     */
    select?: ClassSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSession
     */
    omit?: ClassSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSessionInclude<ExtArgs> | null
    /**
     * Filter, which ClassSession to fetch.
     */
    where: ClassSessionWhereUniqueInput
  }

  /**
   * ClassSession findUniqueOrThrow
   */
  export type ClassSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSession
     */
    select?: ClassSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSession
     */
    omit?: ClassSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSessionInclude<ExtArgs> | null
    /**
     * Filter, which ClassSession to fetch.
     */
    where: ClassSessionWhereUniqueInput
  }

  /**
   * ClassSession findFirst
   */
  export type ClassSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSession
     */
    select?: ClassSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSession
     */
    omit?: ClassSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSessionInclude<ExtArgs> | null
    /**
     * Filter, which ClassSession to fetch.
     */
    where?: ClassSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSessions to fetch.
     */
    orderBy?: ClassSessionOrderByWithRelationInput | ClassSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassSessions.
     */
    cursor?: ClassSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassSessions.
     */
    distinct?: ClassSessionScalarFieldEnum | ClassSessionScalarFieldEnum[]
  }

  /**
   * ClassSession findFirstOrThrow
   */
  export type ClassSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSession
     */
    select?: ClassSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSession
     */
    omit?: ClassSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSessionInclude<ExtArgs> | null
    /**
     * Filter, which ClassSession to fetch.
     */
    where?: ClassSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSessions to fetch.
     */
    orderBy?: ClassSessionOrderByWithRelationInput | ClassSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassSessions.
     */
    cursor?: ClassSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassSessions.
     */
    distinct?: ClassSessionScalarFieldEnum | ClassSessionScalarFieldEnum[]
  }

  /**
   * ClassSession findMany
   */
  export type ClassSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSession
     */
    select?: ClassSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSession
     */
    omit?: ClassSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSessionInclude<ExtArgs> | null
    /**
     * Filter, which ClassSessions to fetch.
     */
    where?: ClassSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSessions to fetch.
     */
    orderBy?: ClassSessionOrderByWithRelationInput | ClassSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassSessions.
     */
    cursor?: ClassSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSessions.
     */
    skip?: number
    distinct?: ClassSessionScalarFieldEnum | ClassSessionScalarFieldEnum[]
  }

  /**
   * ClassSession create
   */
  export type ClassSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSession
     */
    select?: ClassSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSession
     */
    omit?: ClassSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassSession.
     */
    data: XOR<ClassSessionCreateInput, ClassSessionUncheckedCreateInput>
  }

  /**
   * ClassSession createMany
   */
  export type ClassSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassSessions.
     */
    data: ClassSessionCreateManyInput | ClassSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassSession createManyAndReturn
   */
  export type ClassSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSession
     */
    select?: ClassSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSession
     */
    omit?: ClassSessionOmit<ExtArgs> | null
    /**
     * The data used to create many ClassSessions.
     */
    data: ClassSessionCreateManyInput | ClassSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassSession update
   */
  export type ClassSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSession
     */
    select?: ClassSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSession
     */
    omit?: ClassSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassSession.
     */
    data: XOR<ClassSessionUpdateInput, ClassSessionUncheckedUpdateInput>
    /**
     * Choose, which ClassSession to update.
     */
    where: ClassSessionWhereUniqueInput
  }

  /**
   * ClassSession updateMany
   */
  export type ClassSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassSessions.
     */
    data: XOR<ClassSessionUpdateManyMutationInput, ClassSessionUncheckedUpdateManyInput>
    /**
     * Filter which ClassSessions to update
     */
    where?: ClassSessionWhereInput
    /**
     * Limit how many ClassSessions to update.
     */
    limit?: number
  }

  /**
   * ClassSession updateManyAndReturn
   */
  export type ClassSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSession
     */
    select?: ClassSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSession
     */
    omit?: ClassSessionOmit<ExtArgs> | null
    /**
     * The data used to update ClassSessions.
     */
    data: XOR<ClassSessionUpdateManyMutationInput, ClassSessionUncheckedUpdateManyInput>
    /**
     * Filter which ClassSessions to update
     */
    where?: ClassSessionWhereInput
    /**
     * Limit how many ClassSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassSession upsert
   */
  export type ClassSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSession
     */
    select?: ClassSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSession
     */
    omit?: ClassSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassSession to update in case it exists.
     */
    where: ClassSessionWhereUniqueInput
    /**
     * In case the ClassSession found by the `where` argument doesn't exist, create a new ClassSession with this data.
     */
    create: XOR<ClassSessionCreateInput, ClassSessionUncheckedCreateInput>
    /**
     * In case the ClassSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassSessionUpdateInput, ClassSessionUncheckedUpdateInput>
  }

  /**
   * ClassSession delete
   */
  export type ClassSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSession
     */
    select?: ClassSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSession
     */
    omit?: ClassSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSessionInclude<ExtArgs> | null
    /**
     * Filter which ClassSession to delete.
     */
    where: ClassSessionWhereUniqueInput
  }

  /**
   * ClassSession deleteMany
   */
  export type ClassSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassSessions to delete
     */
    where?: ClassSessionWhereInput
    /**
     * Limit how many ClassSessions to delete.
     */
    limit?: number
  }

  /**
   * ClassSession without action
   */
  export type ClassSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSession
     */
    select?: ClassSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSession
     */
    omit?: ClassSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSessionInclude<ExtArgs> | null
  }


  /**
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
  }

  export type SubjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
  }

  export type SubjectCountAggregateOutputType = {
    id: number
    name: number
    code: number
    _all: number
  }


  export type SubjectMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
  }

  export type SubjectMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
  }

  export type SubjectCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type SubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithAggregationInput | SubjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: SubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    id: string
    name: string
    code: string | null
    _count: SubjectCountAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type SubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    classes?: boolean | Subject$classesArgs<ExtArgs>
    teacherSubjects?: boolean | Subject$teacherSubjectsArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
  }

  export type SubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code", ExtArgs["result"]["subject"]>
  export type SubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | Subject$classesArgs<ExtArgs>
    teacherSubjects?: boolean | Subject$teacherSubjectsArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subject"
    objects: {
      classes: Prisma.$ClassSessionPayload<ExtArgs>[]
      teacherSubjects: Prisma.$TeacherSubjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string | null
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = $Result.GetResult<Prisma.$SubjectPayload, S>

  type SubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface SubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subject'], meta: { name: 'Subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectFindManyArgs>(args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends SubjectCreateArgs>(args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCreateManyArgs>(args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends SubjectDeleteArgs>(args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectUpdateArgs>(args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectDeleteManyArgs>(args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectUpdateManyArgs>(args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {SubjectUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, SubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
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
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subject model
   */
  readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classes<T extends Subject$classesArgs<ExtArgs> = {}>(args?: Subset<T, Subject$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teacherSubjects<T extends Subject$teacherSubjectsArgs<ExtArgs> = {}>(args?: Subset<T, Subject$teacherSubjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Subject model
   */
  interface SubjectFieldRefs {
    readonly id: FieldRef<"Subject", 'String'>
    readonly name: FieldRef<"Subject", 'String'>
    readonly code: FieldRef<"Subject", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject create
   */
  export type SubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Subject.
     */
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
  }

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject createManyAndReturn
   */
  export type SubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject updateManyAndReturn
   */
  export type SubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
  }

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to delete.
     */
    limit?: number
  }

  /**
   * Subject.classes
   */
  export type Subject$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSession
     */
    select?: ClassSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSession
     */
    omit?: ClassSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassSessionInclude<ExtArgs> | null
    where?: ClassSessionWhereInput
    orderBy?: ClassSessionOrderByWithRelationInput | ClassSessionOrderByWithRelationInput[]
    cursor?: ClassSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassSessionScalarFieldEnum | ClassSessionScalarFieldEnum[]
  }

  /**
   * Subject.teacherSubjects
   */
  export type Subject$teacherSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    where?: TeacherSubjectWhereInput
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    cursor?: TeacherSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherSubjectScalarFieldEnum | TeacherSubjectScalarFieldEnum[]
  }

  /**
   * Subject without action
   */
  export type SubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
  }


  /**
   * Model Semester
   */

  export type AggregateSemester = {
    _count: SemesterCountAggregateOutputType | null
    _min: SemesterMinAggregateOutputType | null
    _max: SemesterMaxAggregateOutputType | null
  }

  export type SemesterMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type SemesterMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type SemesterCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SemesterMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SemesterMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SemesterCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SemesterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Semester to aggregate.
     */
    where?: SemesterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Semesters to fetch.
     */
    orderBy?: SemesterOrderByWithRelationInput | SemesterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SemesterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Semesters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Semesters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Semesters
    **/
    _count?: true | SemesterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SemesterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SemesterMaxAggregateInputType
  }

  export type GetSemesterAggregateType<T extends SemesterAggregateArgs> = {
        [P in keyof T & keyof AggregateSemester]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSemester[P]>
      : GetScalarType<T[P], AggregateSemester[P]>
  }




  export type SemesterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SemesterWhereInput
    orderBy?: SemesterOrderByWithAggregationInput | SemesterOrderByWithAggregationInput[]
    by: SemesterScalarFieldEnum[] | SemesterScalarFieldEnum
    having?: SemesterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SemesterCountAggregateInputType | true
    _min?: SemesterMinAggregateInputType
    _max?: SemesterMaxAggregateInputType
  }

  export type SemesterGroupByOutputType = {
    id: string
    name: string
    _count: SemesterCountAggregateOutputType | null
    _min: SemesterMinAggregateOutputType | null
    _max: SemesterMaxAggregateOutputType | null
  }

  type GetSemesterGroupByPayload<T extends SemesterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SemesterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SemesterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SemesterGroupByOutputType[P]>
            : GetScalarType<T[P], SemesterGroupByOutputType[P]>
        }
      >
    >


  export type SemesterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subjects?: boolean | Semester$subjectsArgs<ExtArgs>
    _count?: boolean | SemesterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["semester"]>

  export type SemesterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["semester"]>

  export type SemesterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["semester"]>

  export type SemesterSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SemesterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["semester"]>
  export type SemesterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | Semester$subjectsArgs<ExtArgs>
    _count?: boolean | SemesterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SemesterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SemesterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SemesterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Semester"
    objects: {
      subjects: Prisma.$TeacherSubjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["semester"]>
    composites: {}
  }

  type SemesterGetPayload<S extends boolean | null | undefined | SemesterDefaultArgs> = $Result.GetResult<Prisma.$SemesterPayload, S>

  type SemesterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SemesterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SemesterCountAggregateInputType | true
    }

  export interface SemesterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Semester'], meta: { name: 'Semester' } }
    /**
     * Find zero or one Semester that matches the filter.
     * @param {SemesterFindUniqueArgs} args - Arguments to find a Semester
     * @example
     * // Get one Semester
     * const semester = await prisma.semester.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SemesterFindUniqueArgs>(args: SelectSubset<T, SemesterFindUniqueArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Semester that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SemesterFindUniqueOrThrowArgs} args - Arguments to find a Semester
     * @example
     * // Get one Semester
     * const semester = await prisma.semester.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SemesterFindUniqueOrThrowArgs>(args: SelectSubset<T, SemesterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Semester that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterFindFirstArgs} args - Arguments to find a Semester
     * @example
     * // Get one Semester
     * const semester = await prisma.semester.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SemesterFindFirstArgs>(args?: SelectSubset<T, SemesterFindFirstArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Semester that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterFindFirstOrThrowArgs} args - Arguments to find a Semester
     * @example
     * // Get one Semester
     * const semester = await prisma.semester.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SemesterFindFirstOrThrowArgs>(args?: SelectSubset<T, SemesterFindFirstOrThrowArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Semesters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Semesters
     * const semesters = await prisma.semester.findMany()
     * 
     * // Get first 10 Semesters
     * const semesters = await prisma.semester.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const semesterWithIdOnly = await prisma.semester.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SemesterFindManyArgs>(args?: SelectSubset<T, SemesterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Semester.
     * @param {SemesterCreateArgs} args - Arguments to create a Semester.
     * @example
     * // Create one Semester
     * const Semester = await prisma.semester.create({
     *   data: {
     *     // ... data to create a Semester
     *   }
     * })
     * 
     */
    create<T extends SemesterCreateArgs>(args: SelectSubset<T, SemesterCreateArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Semesters.
     * @param {SemesterCreateManyArgs} args - Arguments to create many Semesters.
     * @example
     * // Create many Semesters
     * const semester = await prisma.semester.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SemesterCreateManyArgs>(args?: SelectSubset<T, SemesterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Semesters and returns the data saved in the database.
     * @param {SemesterCreateManyAndReturnArgs} args - Arguments to create many Semesters.
     * @example
     * // Create many Semesters
     * const semester = await prisma.semester.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Semesters and only return the `id`
     * const semesterWithIdOnly = await prisma.semester.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SemesterCreateManyAndReturnArgs>(args?: SelectSubset<T, SemesterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Semester.
     * @param {SemesterDeleteArgs} args - Arguments to delete one Semester.
     * @example
     * // Delete one Semester
     * const Semester = await prisma.semester.delete({
     *   where: {
     *     // ... filter to delete one Semester
     *   }
     * })
     * 
     */
    delete<T extends SemesterDeleteArgs>(args: SelectSubset<T, SemesterDeleteArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Semester.
     * @param {SemesterUpdateArgs} args - Arguments to update one Semester.
     * @example
     * // Update one Semester
     * const semester = await prisma.semester.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SemesterUpdateArgs>(args: SelectSubset<T, SemesterUpdateArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Semesters.
     * @param {SemesterDeleteManyArgs} args - Arguments to filter Semesters to delete.
     * @example
     * // Delete a few Semesters
     * const { count } = await prisma.semester.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SemesterDeleteManyArgs>(args?: SelectSubset<T, SemesterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Semesters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Semesters
     * const semester = await prisma.semester.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SemesterUpdateManyArgs>(args: SelectSubset<T, SemesterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Semesters and returns the data updated in the database.
     * @param {SemesterUpdateManyAndReturnArgs} args - Arguments to update many Semesters.
     * @example
     * // Update many Semesters
     * const semester = await prisma.semester.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Semesters and only return the `id`
     * const semesterWithIdOnly = await prisma.semester.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SemesterUpdateManyAndReturnArgs>(args: SelectSubset<T, SemesterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Semester.
     * @param {SemesterUpsertArgs} args - Arguments to update or create a Semester.
     * @example
     * // Update or create a Semester
     * const semester = await prisma.semester.upsert({
     *   create: {
     *     // ... data to create a Semester
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Semester we want to update
     *   }
     * })
     */
    upsert<T extends SemesterUpsertArgs>(args: SelectSubset<T, SemesterUpsertArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Semesters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterCountArgs} args - Arguments to filter Semesters to count.
     * @example
     * // Count the number of Semesters
     * const count = await prisma.semester.count({
     *   where: {
     *     // ... the filter for the Semesters we want to count
     *   }
     * })
    **/
    count<T extends SemesterCountArgs>(
      args?: Subset<T, SemesterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SemesterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Semester.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SemesterAggregateArgs>(args: Subset<T, SemesterAggregateArgs>): Prisma.PrismaPromise<GetSemesterAggregateType<T>>

    /**
     * Group by Semester.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterGroupByArgs} args - Group by arguments.
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
      T extends SemesterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SemesterGroupByArgs['orderBy'] }
        : { orderBy?: SemesterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SemesterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSemesterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Semester model
   */
  readonly fields: SemesterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Semester.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SemesterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subjects<T extends Semester$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, Semester$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Semester model
   */
  interface SemesterFieldRefs {
    readonly id: FieldRef<"Semester", 'String'>
    readonly name: FieldRef<"Semester", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Semester findUnique
   */
  export type SemesterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter, which Semester to fetch.
     */
    where: SemesterWhereUniqueInput
  }

  /**
   * Semester findUniqueOrThrow
   */
  export type SemesterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter, which Semester to fetch.
     */
    where: SemesterWhereUniqueInput
  }

  /**
   * Semester findFirst
   */
  export type SemesterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter, which Semester to fetch.
     */
    where?: SemesterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Semesters to fetch.
     */
    orderBy?: SemesterOrderByWithRelationInput | SemesterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Semesters.
     */
    cursor?: SemesterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Semesters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Semesters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Semesters.
     */
    distinct?: SemesterScalarFieldEnum | SemesterScalarFieldEnum[]
  }

  /**
   * Semester findFirstOrThrow
   */
  export type SemesterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter, which Semester to fetch.
     */
    where?: SemesterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Semesters to fetch.
     */
    orderBy?: SemesterOrderByWithRelationInput | SemesterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Semesters.
     */
    cursor?: SemesterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Semesters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Semesters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Semesters.
     */
    distinct?: SemesterScalarFieldEnum | SemesterScalarFieldEnum[]
  }

  /**
   * Semester findMany
   */
  export type SemesterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter, which Semesters to fetch.
     */
    where?: SemesterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Semesters to fetch.
     */
    orderBy?: SemesterOrderByWithRelationInput | SemesterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Semesters.
     */
    cursor?: SemesterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Semesters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Semesters.
     */
    skip?: number
    distinct?: SemesterScalarFieldEnum | SemesterScalarFieldEnum[]
  }

  /**
   * Semester create
   */
  export type SemesterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * The data needed to create a Semester.
     */
    data: XOR<SemesterCreateInput, SemesterUncheckedCreateInput>
  }

  /**
   * Semester createMany
   */
  export type SemesterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Semesters.
     */
    data: SemesterCreateManyInput | SemesterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Semester createManyAndReturn
   */
  export type SemesterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * The data used to create many Semesters.
     */
    data: SemesterCreateManyInput | SemesterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Semester update
   */
  export type SemesterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * The data needed to update a Semester.
     */
    data: XOR<SemesterUpdateInput, SemesterUncheckedUpdateInput>
    /**
     * Choose, which Semester to update.
     */
    where: SemesterWhereUniqueInput
  }

  /**
   * Semester updateMany
   */
  export type SemesterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Semesters.
     */
    data: XOR<SemesterUpdateManyMutationInput, SemesterUncheckedUpdateManyInput>
    /**
     * Filter which Semesters to update
     */
    where?: SemesterWhereInput
    /**
     * Limit how many Semesters to update.
     */
    limit?: number
  }

  /**
   * Semester updateManyAndReturn
   */
  export type SemesterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * The data used to update Semesters.
     */
    data: XOR<SemesterUpdateManyMutationInput, SemesterUncheckedUpdateManyInput>
    /**
     * Filter which Semesters to update
     */
    where?: SemesterWhereInput
    /**
     * Limit how many Semesters to update.
     */
    limit?: number
  }

  /**
   * Semester upsert
   */
  export type SemesterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * The filter to search for the Semester to update in case it exists.
     */
    where: SemesterWhereUniqueInput
    /**
     * In case the Semester found by the `where` argument doesn't exist, create a new Semester with this data.
     */
    create: XOR<SemesterCreateInput, SemesterUncheckedCreateInput>
    /**
     * In case the Semester was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SemesterUpdateInput, SemesterUncheckedUpdateInput>
  }

  /**
   * Semester delete
   */
  export type SemesterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter which Semester to delete.
     */
    where: SemesterWhereUniqueInput
  }

  /**
   * Semester deleteMany
   */
  export type SemesterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Semesters to delete
     */
    where?: SemesterWhereInput
    /**
     * Limit how many Semesters to delete.
     */
    limit?: number
  }

  /**
   * Semester.subjects
   */
  export type Semester$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    where?: TeacherSubjectWhereInput
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    cursor?: TeacherSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherSubjectScalarFieldEnum | TeacherSubjectScalarFieldEnum[]
  }

  /**
   * Semester without action
   */
  export type SemesterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
  }


  /**
   * Model Section
   */

  export type AggregateSection = {
    _count: SectionCountAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  export type SectionMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type SectionMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type SectionCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SectionMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SectionMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SectionCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Section to aggregate.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sections
    **/
    _count?: true | SectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionMaxAggregateInputType
  }

  export type GetSectionAggregateType<T extends SectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSection[P]>
      : GetScalarType<T[P], AggregateSection[P]>
  }




  export type SectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithAggregationInput | SectionOrderByWithAggregationInput[]
    by: SectionScalarFieldEnum[] | SectionScalarFieldEnum
    having?: SectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionCountAggregateInputType | true
    _min?: SectionMinAggregateInputType
    _max?: SectionMaxAggregateInputType
  }

  export type SectionGroupByOutputType = {
    id: string
    name: string
    _count: SectionCountAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  type GetSectionGroupByPayload<T extends SectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionGroupByOutputType[P]>
            : GetScalarType<T[P], SectionGroupByOutputType[P]>
        }
      >
    >


  export type SectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subjects?: boolean | Section$subjectsArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["section"]>

  export type SectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["section"]>

  export type SectionSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["section"]>
  export type SectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | Section$subjectsArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Section"
    objects: {
      subjects: Prisma.$TeacherSubjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["section"]>
    composites: {}
  }

  type SectionGetPayload<S extends boolean | null | undefined | SectionDefaultArgs> = $Result.GetResult<Prisma.$SectionPayload, S>

  type SectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionCountAggregateInputType | true
    }

  export interface SectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Section'], meta: { name: 'Section' } }
    /**
     * Find zero or one Section that matches the filter.
     * @param {SectionFindUniqueArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionFindUniqueArgs>(args: SelectSubset<T, SectionFindUniqueArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Section that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectionFindUniqueOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionFindFirstArgs>(args?: SelectSubset<T, SectionFindFirstArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.section.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.section.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionWithIdOnly = await prisma.section.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectionFindManyArgs>(args?: SelectSubset<T, SectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Section.
     * @param {SectionCreateArgs} args - Arguments to create a Section.
     * @example
     * // Create one Section
     * const Section = await prisma.section.create({
     *   data: {
     *     // ... data to create a Section
     *   }
     * })
     * 
     */
    create<T extends SectionCreateArgs>(args: SelectSubset<T, SectionCreateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sections.
     * @param {SectionCreateManyArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionCreateManyArgs>(args?: SelectSubset<T, SectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sections and returns the data saved in the database.
     * @param {SectionCreateManyAndReturnArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sections and only return the `id`
     * const sectionWithIdOnly = await prisma.section.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectionCreateManyAndReturnArgs>(args?: SelectSubset<T, SectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Section.
     * @param {SectionDeleteArgs} args - Arguments to delete one Section.
     * @example
     * // Delete one Section
     * const Section = await prisma.section.delete({
     *   where: {
     *     // ... filter to delete one Section
     *   }
     * })
     * 
     */
    delete<T extends SectionDeleteArgs>(args: SelectSubset<T, SectionDeleteArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Section.
     * @param {SectionUpdateArgs} args - Arguments to update one Section.
     * @example
     * // Update one Section
     * const section = await prisma.section.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionUpdateArgs>(args: SelectSubset<T, SectionUpdateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sections.
     * @param {SectionDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.section.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionDeleteManyArgs>(args?: SelectSubset<T, SectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionUpdateManyArgs>(args: SelectSubset<T, SectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections and returns the data updated in the database.
     * @param {SectionUpdateManyAndReturnArgs} args - Arguments to update many Sections.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sections and only return the `id`
     * const sectionWithIdOnly = await prisma.section.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SectionUpdateManyAndReturnArgs>(args: SelectSubset<T, SectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Section.
     * @param {SectionUpsertArgs} args - Arguments to update or create a Section.
     * @example
     * // Update or create a Section
     * const section = await prisma.section.upsert({
     *   create: {
     *     // ... data to create a Section
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Section we want to update
     *   }
     * })
     */
    upsert<T extends SectionUpsertArgs>(args: SelectSubset<T, SectionUpsertArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.section.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends SectionCountArgs>(
      args?: Subset<T, SectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectionAggregateArgs>(args: Subset<T, SectionAggregateArgs>): Prisma.PrismaPromise<GetSectionAggregateType<T>>

    /**
     * Group by Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionGroupByArgs} args - Group by arguments.
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
      T extends SectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionGroupByArgs['orderBy'] }
        : { orderBy?: SectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Section model
   */
  readonly fields: SectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Section.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subjects<T extends Section$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, Section$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Section model
   */
  interface SectionFieldRefs {
    readonly id: FieldRef<"Section", 'String'>
    readonly name: FieldRef<"Section", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Section findUnique
   */
  export type SectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findUniqueOrThrow
   */
  export type SectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findFirst
   */
  export type SectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findFirstOrThrow
   */
  export type SectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findMany
   */
  export type SectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Sections to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section create
   */
  export type SectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Section.
     */
    data: XOR<SectionCreateInput, SectionUncheckedCreateInput>
  }

  /**
   * Section createMany
   */
  export type SectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Section createManyAndReturn
   */
  export type SectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Section update
   */
  export type SectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Section.
     */
    data: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
    /**
     * Choose, which Section to update.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section updateMany
   */
  export type SectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
  }

  /**
   * Section updateManyAndReturn
   */
  export type SectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
  }

  /**
   * Section upsert
   */
  export type SectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Section to update in case it exists.
     */
    where: SectionWhereUniqueInput
    /**
     * In case the Section found by the `where` argument doesn't exist, create a new Section with this data.
     */
    create: XOR<SectionCreateInput, SectionUncheckedCreateInput>
    /**
     * In case the Section was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
  }

  /**
   * Section delete
   */
  export type SectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter which Section to delete.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section deleteMany
   */
  export type SectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sections to delete
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to delete.
     */
    limit?: number
  }

  /**
   * Section.subjects
   */
  export type Section$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    where?: TeacherSubjectWhereInput
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    cursor?: TeacherSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherSubjectScalarFieldEnum | TeacherSubjectScalarFieldEnum[]
  }

  /**
   * Section without action
   */
  export type SectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    role: 'role',
    isPremium: 'isPremium',
    createdAt: 'createdAt',
    premiumExpiresAt: 'premiumExpiresAt',
    branch: 'branch',
    year: 'year',
    semester: 'semester'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    department: 'department',
    designation: 'designation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const TeacherSubjectScalarFieldEnum: {
    id: 'id',
    teacherId: 'teacherId',
    subjectId: 'subjectId',
    semesterId: 'semesterId',
    sectionId: 'sectionId'
  };

  export type TeacherSubjectScalarFieldEnum = (typeof TeacherSubjectScalarFieldEnum)[keyof typeof TeacherSubjectScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    subject: 'subject',
    date: 'date',
    status: 'status',
    markedBy: 'markedBy'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const AttendanceTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    subject: 'subject',
    professorId: 'professorId',
    issuedAt: 'issuedAt',
    expiresAt: 'expiresAt'
  };

  export type AttendanceTokenScalarFieldEnum = (typeof AttendanceTokenScalarFieldEnum)[keyof typeof AttendanceTokenScalarFieldEnum]


  export const PremiumFeatureScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type PremiumFeatureScalarFieldEnum = (typeof PremiumFeatureScalarFieldEnum)[keyof typeof PremiumFeatureScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    date: 'date',
    type: 'type',
    active: 'active',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const GoogleTokenScalarFieldEnum: {
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GoogleTokenScalarFieldEnum = (typeof GoogleTokenScalarFieldEnum)[keyof typeof GoogleTokenScalarFieldEnum]


  export const RecentActivityScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    userName: 'userName',
    action: 'action',
    timestamp: 'timestamp'
  };

  export type RecentActivityScalarFieldEnum = (typeof RecentActivityScalarFieldEnum)[keyof typeof RecentActivityScalarFieldEnum]


  export const SupportRequestScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type SupportRequestScalarFieldEnum = (typeof SupportRequestScalarFieldEnum)[keyof typeof SupportRequestScalarFieldEnum]


  export const PlanConfigScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlanConfigScalarFieldEnum = (typeof PlanConfigScalarFieldEnum)[keyof typeof PlanConfigScalarFieldEnum]


  export const ClassSessionScalarFieldEnum: {
    id: 'id',
    subjectId: 'subjectId',
    section: 'section',
    semester: 'semester',
    weekday: 'weekday',
    room: 'room',
    startTime: 'startTime',
    endTime: 'endTime',
    teacherId: 'teacherId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClassSessionScalarFieldEnum = (typeof ClassSessionScalarFieldEnum)[keyof typeof ClassSessionScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const SemesterScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SemesterScalarFieldEnum = (typeof SemesterScalarFieldEnum)[keyof typeof SemesterScalarFieldEnum]


  export const SectionScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SectionScalarFieldEnum = (typeof SectionScalarFieldEnum)[keyof typeof SectionScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
   * Reference to a field of type 'EventType'
   */
  export type EnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType'>
    


  /**
   * Reference to a field of type 'EventType[]'
   */
  export type ListEnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType[]'>
    


  /**
   * Reference to a field of type 'Weekday'
   */
  export type EnumWeekdayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Weekday'>
    


  /**
   * Reference to a field of type 'Weekday[]'
   */
  export type ListEnumWeekdayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Weekday[]'>
    


  /**
   * Reference to a field of type 'SessionStatus'
   */
  export type EnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus'>
    


  /**
   * Reference to a field of type 'SessionStatus[]'
   */
  export type ListEnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus[]'>
    


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
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isPremium?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    premiumExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    branch?: StringNullableFilter<"User"> | string | null
    year?: IntNullableFilter<"User"> | number | null
    semester?: IntNullableFilter<"User"> | number | null
    attendance?: AttendanceListRelationFilter
    premiumFeatures?: PremiumFeatureListRelationFilter
    GoogleToken?: GoogleTokenListRelationFilter
    RecentActivity?: RecentActivityListRelationFilter
    TeacherProfile?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    isPremium?: SortOrder
    createdAt?: SortOrder
    premiumExpiresAt?: SortOrderInput | SortOrder
    branch?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    semester?: SortOrderInput | SortOrder
    attendance?: AttendanceOrderByRelationAggregateInput
    premiumFeatures?: PremiumFeatureOrderByRelationAggregateInput
    GoogleToken?: GoogleTokenOrderByRelationAggregateInput
    RecentActivity?: RecentActivityOrderByRelationAggregateInput
    TeacherProfile?: TeacherOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isPremium?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    premiumExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    branch?: StringNullableFilter<"User"> | string | null
    year?: IntNullableFilter<"User"> | number | null
    semester?: IntNullableFilter<"User"> | number | null
    attendance?: AttendanceListRelationFilter
    premiumFeatures?: PremiumFeatureListRelationFilter
    GoogleToken?: GoogleTokenListRelationFilter
    RecentActivity?: RecentActivityListRelationFilter
    TeacherProfile?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    isPremium?: SortOrder
    createdAt?: SortOrder
    premiumExpiresAt?: SortOrderInput | SortOrder
    branch?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    semester?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isPremium?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    premiumExpiresAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    branch?: StringNullableWithAggregatesFilter<"User"> | string | null
    year?: IntNullableWithAggregatesFilter<"User"> | number | null
    semester?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    id?: StringFilter<"Teacher"> | string
    userId?: StringFilter<"Teacher"> | string
    department?: StringNullableFilter<"Teacher"> | string | null
    designation?: StringNullableFilter<"Teacher"> | string | null
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeFilter<"Teacher"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    subjects?: TeacherSubjectListRelationFilter
    classes?: ClassSessionListRelationFilter
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    department?: SortOrderInput | SortOrder
    designation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    subjects?: TeacherSubjectOrderByRelationAggregateInput
    classes?: ClassSessionOrderByRelationAggregateInput
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    department?: StringNullableFilter<"Teacher"> | string | null
    designation?: StringNullableFilter<"Teacher"> | string | null
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeFilter<"Teacher"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    subjects?: TeacherSubjectListRelationFilter
    classes?: ClassSessionListRelationFilter
  }, "id" | "userId">

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    department?: SortOrderInput | SortOrder
    designation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Teacher"> | string
    userId?: StringWithAggregatesFilter<"Teacher"> | string
    department?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
    designation?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
  }

  export type TeacherSubjectWhereInput = {
    AND?: TeacherSubjectWhereInput | TeacherSubjectWhereInput[]
    OR?: TeacherSubjectWhereInput[]
    NOT?: TeacherSubjectWhereInput | TeacherSubjectWhereInput[]
    id?: StringFilter<"TeacherSubject"> | string
    teacherId?: StringFilter<"TeacherSubject"> | string
    subjectId?: StringFilter<"TeacherSubject"> | string
    semesterId?: StringFilter<"TeacherSubject"> | string
    sectionId?: StringFilter<"TeacherSubject"> | string
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    semester?: XOR<SemesterScalarRelationFilter, SemesterWhereInput>
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
  }

  export type TeacherSubjectOrderByWithRelationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    subjectId?: SortOrder
    semesterId?: SortOrder
    sectionId?: SortOrder
    teacher?: TeacherOrderByWithRelationInput
    subject?: SubjectOrderByWithRelationInput
    semester?: SemesterOrderByWithRelationInput
    section?: SectionOrderByWithRelationInput
  }

  export type TeacherSubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeacherSubjectWhereInput | TeacherSubjectWhereInput[]
    OR?: TeacherSubjectWhereInput[]
    NOT?: TeacherSubjectWhereInput | TeacherSubjectWhereInput[]
    teacherId?: StringFilter<"TeacherSubject"> | string
    subjectId?: StringFilter<"TeacherSubject"> | string
    semesterId?: StringFilter<"TeacherSubject"> | string
    sectionId?: StringFilter<"TeacherSubject"> | string
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    semester?: XOR<SemesterScalarRelationFilter, SemesterWhereInput>
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
  }, "id">

  export type TeacherSubjectOrderByWithAggregationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    subjectId?: SortOrder
    semesterId?: SortOrder
    sectionId?: SortOrder
    _count?: TeacherSubjectCountOrderByAggregateInput
    _max?: TeacherSubjectMaxOrderByAggregateInput
    _min?: TeacherSubjectMinOrderByAggregateInput
  }

  export type TeacherSubjectScalarWhereWithAggregatesInput = {
    AND?: TeacherSubjectScalarWhereWithAggregatesInput | TeacherSubjectScalarWhereWithAggregatesInput[]
    OR?: TeacherSubjectScalarWhereWithAggregatesInput[]
    NOT?: TeacherSubjectScalarWhereWithAggregatesInput | TeacherSubjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeacherSubject"> | string
    teacherId?: StringWithAggregatesFilter<"TeacherSubject"> | string
    subjectId?: StringWithAggregatesFilter<"TeacherSubject"> | string
    semesterId?: StringWithAggregatesFilter<"TeacherSubject"> | string
    sectionId?: StringWithAggregatesFilter<"TeacherSubject"> | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: StringFilter<"Attendance"> | string
    studentId?: StringFilter<"Attendance"> | string
    subject?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: StringFilter<"Attendance"> | string
    markedBy?: StringFilter<"Attendance"> | string
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    subject?: SortOrder
    date?: SortOrder
    status?: SortOrder
    markedBy?: SortOrder
    student?: UserOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    studentId?: StringFilter<"Attendance"> | string
    subject?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: StringFilter<"Attendance"> | string
    markedBy?: StringFilter<"Attendance"> | string
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    subject?: SortOrder
    date?: SortOrder
    status?: SortOrder
    markedBy?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attendance"> | string
    studentId?: StringWithAggregatesFilter<"Attendance"> | string
    subject?: StringWithAggregatesFilter<"Attendance"> | string
    date?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    status?: StringWithAggregatesFilter<"Attendance"> | string
    markedBy?: StringWithAggregatesFilter<"Attendance"> | string
  }

  export type AttendanceTokenWhereInput = {
    AND?: AttendanceTokenWhereInput | AttendanceTokenWhereInput[]
    OR?: AttendanceTokenWhereInput[]
    NOT?: AttendanceTokenWhereInput | AttendanceTokenWhereInput[]
    id?: StringFilter<"AttendanceToken"> | string
    token?: StringFilter<"AttendanceToken"> | string
    subject?: StringFilter<"AttendanceToken"> | string
    professorId?: StringFilter<"AttendanceToken"> | string
    issuedAt?: DateTimeFilter<"AttendanceToken"> | Date | string
    expiresAt?: DateTimeFilter<"AttendanceToken"> | Date | string
  }

  export type AttendanceTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    subject?: SortOrder
    professorId?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type AttendanceTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: AttendanceTokenWhereInput | AttendanceTokenWhereInput[]
    OR?: AttendanceTokenWhereInput[]
    NOT?: AttendanceTokenWhereInput | AttendanceTokenWhereInput[]
    subject?: StringFilter<"AttendanceToken"> | string
    professorId?: StringFilter<"AttendanceToken"> | string
    issuedAt?: DateTimeFilter<"AttendanceToken"> | Date | string
    expiresAt?: DateTimeFilter<"AttendanceToken"> | Date | string
  }, "id" | "token">

  export type AttendanceTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    subject?: SortOrder
    professorId?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    _count?: AttendanceTokenCountOrderByAggregateInput
    _max?: AttendanceTokenMaxOrderByAggregateInput
    _min?: AttendanceTokenMinOrderByAggregateInput
  }

  export type AttendanceTokenScalarWhereWithAggregatesInput = {
    AND?: AttendanceTokenScalarWhereWithAggregatesInput | AttendanceTokenScalarWhereWithAggregatesInput[]
    OR?: AttendanceTokenScalarWhereWithAggregatesInput[]
    NOT?: AttendanceTokenScalarWhereWithAggregatesInput | AttendanceTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AttendanceToken"> | string
    token?: StringWithAggregatesFilter<"AttendanceToken"> | string
    subject?: StringWithAggregatesFilter<"AttendanceToken"> | string
    professorId?: StringWithAggregatesFilter<"AttendanceToken"> | string
    issuedAt?: DateTimeWithAggregatesFilter<"AttendanceToken"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"AttendanceToken"> | Date | string
  }

  export type PremiumFeatureWhereInput = {
    AND?: PremiumFeatureWhereInput | PremiumFeatureWhereInput[]
    OR?: PremiumFeatureWhereInput[]
    NOT?: PremiumFeatureWhereInput | PremiumFeatureWhereInput[]
    id?: StringFilter<"PremiumFeature"> | string
    name?: StringFilter<"PremiumFeature"> | string
    createdAt?: DateTimeFilter<"PremiumFeature"> | Date | string
    users?: UserListRelationFilter
  }

  export type PremiumFeatureOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type PremiumFeatureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: PremiumFeatureWhereInput | PremiumFeatureWhereInput[]
    OR?: PremiumFeatureWhereInput[]
    NOT?: PremiumFeatureWhereInput | PremiumFeatureWhereInput[]
    createdAt?: DateTimeFilter<"PremiumFeature"> | Date | string
    users?: UserListRelationFilter
  }, "id" | "name">

  export type PremiumFeatureOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: PremiumFeatureCountOrderByAggregateInput
    _max?: PremiumFeatureMaxOrderByAggregateInput
    _min?: PremiumFeatureMinOrderByAggregateInput
  }

  export type PremiumFeatureScalarWhereWithAggregatesInput = {
    AND?: PremiumFeatureScalarWhereWithAggregatesInput | PremiumFeatureScalarWhereWithAggregatesInput[]
    OR?: PremiumFeatureScalarWhereWithAggregatesInput[]
    NOT?: PremiumFeatureScalarWhereWithAggregatesInput | PremiumFeatureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PremiumFeature"> | string
    name?: StringWithAggregatesFilter<"PremiumFeature"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PremiumFeature"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    date?: DateTimeFilter<"Event"> | Date | string
    type?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    active?: BoolFilter<"Event"> | boolean
    createdBy?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    type?: SortOrder
    active?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    date?: DateTimeFilter<"Event"> | Date | string
    type?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    active?: BoolFilter<"Event"> | boolean
    createdBy?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    type?: SortOrder
    active?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    type?: EnumEventTypeWithAggregatesFilter<"Event"> | $Enums.EventType
    active?: BoolWithAggregatesFilter<"Event"> | boolean
    createdBy?: StringWithAggregatesFilter<"Event"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type GoogleTokenWhereInput = {
    AND?: GoogleTokenWhereInput | GoogleTokenWhereInput[]
    OR?: GoogleTokenWhereInput[]
    NOT?: GoogleTokenWhereInput | GoogleTokenWhereInput[]
    userId?: StringFilter<"GoogleToken"> | string
    accessToken?: StringFilter<"GoogleToken"> | string
    refreshToken?: StringNullableFilter<"GoogleToken"> | string | null
    createdAt?: DateTimeFilter<"GoogleToken"> | Date | string
    updatedAt?: DateTimeFilter<"GoogleToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GoogleTokenOrderByWithRelationInput = {
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type GoogleTokenWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: GoogleTokenWhereInput | GoogleTokenWhereInput[]
    OR?: GoogleTokenWhereInput[]
    NOT?: GoogleTokenWhereInput | GoogleTokenWhereInput[]
    accessToken?: StringFilter<"GoogleToken"> | string
    refreshToken?: StringNullableFilter<"GoogleToken"> | string | null
    createdAt?: DateTimeFilter<"GoogleToken"> | Date | string
    updatedAt?: DateTimeFilter<"GoogleToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId">

  export type GoogleTokenOrderByWithAggregationInput = {
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GoogleTokenCountOrderByAggregateInput
    _max?: GoogleTokenMaxOrderByAggregateInput
    _min?: GoogleTokenMinOrderByAggregateInput
  }

  export type GoogleTokenScalarWhereWithAggregatesInput = {
    AND?: GoogleTokenScalarWhereWithAggregatesInput | GoogleTokenScalarWhereWithAggregatesInput[]
    OR?: GoogleTokenScalarWhereWithAggregatesInput[]
    NOT?: GoogleTokenScalarWhereWithAggregatesInput | GoogleTokenScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"GoogleToken"> | string
    accessToken?: StringWithAggregatesFilter<"GoogleToken"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"GoogleToken"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GoogleToken"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GoogleToken"> | Date | string
  }

  export type RecentActivityWhereInput = {
    AND?: RecentActivityWhereInput | RecentActivityWhereInput[]
    OR?: RecentActivityWhereInput[]
    NOT?: RecentActivityWhereInput | RecentActivityWhereInput[]
    id?: StringFilter<"RecentActivity"> | string
    userId?: StringNullableFilter<"RecentActivity"> | string | null
    userName?: StringNullableFilter<"RecentActivity"> | string | null
    action?: StringFilter<"RecentActivity"> | string
    timestamp?: DateTimeFilter<"RecentActivity"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type RecentActivityOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    userName?: SortOrderInput | SortOrder
    action?: SortOrder
    timestamp?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RecentActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecentActivityWhereInput | RecentActivityWhereInput[]
    OR?: RecentActivityWhereInput[]
    NOT?: RecentActivityWhereInput | RecentActivityWhereInput[]
    userId?: StringNullableFilter<"RecentActivity"> | string | null
    userName?: StringNullableFilter<"RecentActivity"> | string | null
    action?: StringFilter<"RecentActivity"> | string
    timestamp?: DateTimeFilter<"RecentActivity"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type RecentActivityOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    userName?: SortOrderInput | SortOrder
    action?: SortOrder
    timestamp?: SortOrder
    _count?: RecentActivityCountOrderByAggregateInput
    _max?: RecentActivityMaxOrderByAggregateInput
    _min?: RecentActivityMinOrderByAggregateInput
  }

  export type RecentActivityScalarWhereWithAggregatesInput = {
    AND?: RecentActivityScalarWhereWithAggregatesInput | RecentActivityScalarWhereWithAggregatesInput[]
    OR?: RecentActivityScalarWhereWithAggregatesInput[]
    NOT?: RecentActivityScalarWhereWithAggregatesInput | RecentActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecentActivity"> | string
    userId?: StringNullableWithAggregatesFilter<"RecentActivity"> | string | null
    userName?: StringNullableWithAggregatesFilter<"RecentActivity"> | string | null
    action?: StringWithAggregatesFilter<"RecentActivity"> | string
    timestamp?: DateTimeWithAggregatesFilter<"RecentActivity"> | Date | string
  }

  export type SupportRequestWhereInput = {
    AND?: SupportRequestWhereInput | SupportRequestWhereInput[]
    OR?: SupportRequestWhereInput[]
    NOT?: SupportRequestWhereInput | SupportRequestWhereInput[]
    id?: StringFilter<"SupportRequest"> | string
    name?: StringFilter<"SupportRequest"> | string
    email?: StringFilter<"SupportRequest"> | string
    message?: StringFilter<"SupportRequest"> | string
    createdAt?: DateTimeFilter<"SupportRequest"> | Date | string
  }

  export type SupportRequestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type SupportRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupportRequestWhereInput | SupportRequestWhereInput[]
    OR?: SupportRequestWhereInput[]
    NOT?: SupportRequestWhereInput | SupportRequestWhereInput[]
    name?: StringFilter<"SupportRequest"> | string
    email?: StringFilter<"SupportRequest"> | string
    message?: StringFilter<"SupportRequest"> | string
    createdAt?: DateTimeFilter<"SupportRequest"> | Date | string
  }, "id">

  export type SupportRequestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: SupportRequestCountOrderByAggregateInput
    _max?: SupportRequestMaxOrderByAggregateInput
    _min?: SupportRequestMinOrderByAggregateInput
  }

  export type SupportRequestScalarWhereWithAggregatesInput = {
    AND?: SupportRequestScalarWhereWithAggregatesInput | SupportRequestScalarWhereWithAggregatesInput[]
    OR?: SupportRequestScalarWhereWithAggregatesInput[]
    NOT?: SupportRequestScalarWhereWithAggregatesInput | SupportRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupportRequest"> | string
    name?: StringWithAggregatesFilter<"SupportRequest"> | string
    email?: StringWithAggregatesFilter<"SupportRequest"> | string
    message?: StringWithAggregatesFilter<"SupportRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SupportRequest"> | Date | string
  }

  export type PlanConfigWhereInput = {
    AND?: PlanConfigWhereInput | PlanConfigWhereInput[]
    OR?: PlanConfigWhereInput[]
    NOT?: PlanConfigWhereInput | PlanConfigWhereInput[]
    id?: StringFilter<"PlanConfig"> | string
    name?: StringFilter<"PlanConfig"> | string
    price?: IntFilter<"PlanConfig"> | number
    createdAt?: DateTimeFilter<"PlanConfig"> | Date | string
    updatedAt?: DateTimeFilter<"PlanConfig"> | Date | string
  }

  export type PlanConfigOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: PlanConfigWhereInput | PlanConfigWhereInput[]
    OR?: PlanConfigWhereInput[]
    NOT?: PlanConfigWhereInput | PlanConfigWhereInput[]
    price?: IntFilter<"PlanConfig"> | number
    createdAt?: DateTimeFilter<"PlanConfig"> | Date | string
    updatedAt?: DateTimeFilter<"PlanConfig"> | Date | string
  }, "id" | "name">

  export type PlanConfigOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlanConfigCountOrderByAggregateInput
    _avg?: PlanConfigAvgOrderByAggregateInput
    _max?: PlanConfigMaxOrderByAggregateInput
    _min?: PlanConfigMinOrderByAggregateInput
    _sum?: PlanConfigSumOrderByAggregateInput
  }

  export type PlanConfigScalarWhereWithAggregatesInput = {
    AND?: PlanConfigScalarWhereWithAggregatesInput | PlanConfigScalarWhereWithAggregatesInput[]
    OR?: PlanConfigScalarWhereWithAggregatesInput[]
    NOT?: PlanConfigScalarWhereWithAggregatesInput | PlanConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlanConfig"> | string
    name?: StringWithAggregatesFilter<"PlanConfig"> | string
    price?: IntWithAggregatesFilter<"PlanConfig"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PlanConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PlanConfig"> | Date | string
  }

  export type ClassSessionWhereInput = {
    AND?: ClassSessionWhereInput | ClassSessionWhereInput[]
    OR?: ClassSessionWhereInput[]
    NOT?: ClassSessionWhereInput | ClassSessionWhereInput[]
    id?: StringFilter<"ClassSession"> | string
    subjectId?: StringFilter<"ClassSession"> | string
    section?: StringFilter<"ClassSession"> | string
    semester?: IntFilter<"ClassSession"> | number
    weekday?: EnumWeekdayFilter<"ClassSession"> | $Enums.Weekday
    room?: StringNullableFilter<"ClassSession"> | string | null
    startTime?: DateTimeFilter<"ClassSession"> | Date | string
    endTime?: DateTimeFilter<"ClassSession"> | Date | string
    teacherId?: StringFilter<"ClassSession"> | string
    status?: EnumSessionStatusFilter<"ClassSession"> | $Enums.SessionStatus
    createdAt?: DateTimeFilter<"ClassSession"> | Date | string
    updatedAt?: DateTimeFilter<"ClassSession"> | Date | string
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
  }

  export type ClassSessionOrderByWithRelationInput = {
    id?: SortOrder
    subjectId?: SortOrder
    section?: SortOrder
    semester?: SortOrder
    weekday?: SortOrder
    room?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    teacherId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subject?: SubjectOrderByWithRelationInput
    teacher?: TeacherOrderByWithRelationInput
  }

  export type ClassSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassSessionWhereInput | ClassSessionWhereInput[]
    OR?: ClassSessionWhereInput[]
    NOT?: ClassSessionWhereInput | ClassSessionWhereInput[]
    subjectId?: StringFilter<"ClassSession"> | string
    section?: StringFilter<"ClassSession"> | string
    semester?: IntFilter<"ClassSession"> | number
    weekday?: EnumWeekdayFilter<"ClassSession"> | $Enums.Weekday
    room?: StringNullableFilter<"ClassSession"> | string | null
    startTime?: DateTimeFilter<"ClassSession"> | Date | string
    endTime?: DateTimeFilter<"ClassSession"> | Date | string
    teacherId?: StringFilter<"ClassSession"> | string
    status?: EnumSessionStatusFilter<"ClassSession"> | $Enums.SessionStatus
    createdAt?: DateTimeFilter<"ClassSession"> | Date | string
    updatedAt?: DateTimeFilter<"ClassSession"> | Date | string
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
  }, "id">

  export type ClassSessionOrderByWithAggregationInput = {
    id?: SortOrder
    subjectId?: SortOrder
    section?: SortOrder
    semester?: SortOrder
    weekday?: SortOrder
    room?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    teacherId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClassSessionCountOrderByAggregateInput
    _avg?: ClassSessionAvgOrderByAggregateInput
    _max?: ClassSessionMaxOrderByAggregateInput
    _min?: ClassSessionMinOrderByAggregateInput
    _sum?: ClassSessionSumOrderByAggregateInput
  }

  export type ClassSessionScalarWhereWithAggregatesInput = {
    AND?: ClassSessionScalarWhereWithAggregatesInput | ClassSessionScalarWhereWithAggregatesInput[]
    OR?: ClassSessionScalarWhereWithAggregatesInput[]
    NOT?: ClassSessionScalarWhereWithAggregatesInput | ClassSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClassSession"> | string
    subjectId?: StringWithAggregatesFilter<"ClassSession"> | string
    section?: StringWithAggregatesFilter<"ClassSession"> | string
    semester?: IntWithAggregatesFilter<"ClassSession"> | number
    weekday?: EnumWeekdayWithAggregatesFilter<"ClassSession"> | $Enums.Weekday
    room?: StringNullableWithAggregatesFilter<"ClassSession"> | string | null
    startTime?: DateTimeWithAggregatesFilter<"ClassSession"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"ClassSession"> | Date | string
    teacherId?: StringWithAggregatesFilter<"ClassSession"> | string
    status?: EnumSessionStatusWithAggregatesFilter<"ClassSession"> | $Enums.SessionStatus
    createdAt?: DateTimeWithAggregatesFilter<"ClassSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ClassSession"> | Date | string
  }

  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    id?: StringFilter<"Subject"> | string
    name?: StringFilter<"Subject"> | string
    code?: StringNullableFilter<"Subject"> | string | null
    classes?: ClassSessionListRelationFilter
    teacherSubjects?: TeacherSubjectListRelationFilter
  }

  export type SubjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    classes?: ClassSessionOrderByRelationAggregateInput
    teacherSubjects?: TeacherSubjectOrderByRelationAggregateInput
  }

  export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    name?: StringFilter<"Subject"> | string
    classes?: ClassSessionListRelationFilter
    teacherSubjects?: TeacherSubjectListRelationFilter
  }, "id" | "code">

  export type SubjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    _count?: SubjectCountOrderByAggregateInput
    _max?: SubjectMaxOrderByAggregateInput
    _min?: SubjectMinOrderByAggregateInput
  }

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    OR?: SubjectScalarWhereWithAggregatesInput[]
    NOT?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subject"> | string
    name?: StringWithAggregatesFilter<"Subject"> | string
    code?: StringNullableWithAggregatesFilter<"Subject"> | string | null
  }

  export type SemesterWhereInput = {
    AND?: SemesterWhereInput | SemesterWhereInput[]
    OR?: SemesterWhereInput[]
    NOT?: SemesterWhereInput | SemesterWhereInput[]
    id?: StringFilter<"Semester"> | string
    name?: StringFilter<"Semester"> | string
    subjects?: TeacherSubjectListRelationFilter
  }

  export type SemesterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    subjects?: TeacherSubjectOrderByRelationAggregateInput
  }

  export type SemesterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SemesterWhereInput | SemesterWhereInput[]
    OR?: SemesterWhereInput[]
    NOT?: SemesterWhereInput | SemesterWhereInput[]
    name?: StringFilter<"Semester"> | string
    subjects?: TeacherSubjectListRelationFilter
  }, "id">

  export type SemesterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SemesterCountOrderByAggregateInput
    _max?: SemesterMaxOrderByAggregateInput
    _min?: SemesterMinOrderByAggregateInput
  }

  export type SemesterScalarWhereWithAggregatesInput = {
    AND?: SemesterScalarWhereWithAggregatesInput | SemesterScalarWhereWithAggregatesInput[]
    OR?: SemesterScalarWhereWithAggregatesInput[]
    NOT?: SemesterScalarWhereWithAggregatesInput | SemesterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Semester"> | string
    name?: StringWithAggregatesFilter<"Semester"> | string
  }

  export type SectionWhereInput = {
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    id?: StringFilter<"Section"> | string
    name?: StringFilter<"Section"> | string
    subjects?: TeacherSubjectListRelationFilter
  }

  export type SectionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    subjects?: TeacherSubjectOrderByRelationAggregateInput
  }

  export type SectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    name?: StringFilter<"Section"> | string
    subjects?: TeacherSubjectListRelationFilter
  }, "id">

  export type SectionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SectionCountOrderByAggregateInput
    _max?: SectionMaxOrderByAggregateInput
    _min?: SectionMinOrderByAggregateInput
  }

  export type SectionScalarWhereWithAggregatesInput = {
    AND?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    OR?: SectionScalarWhereWithAggregatesInput[]
    NOT?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Section"> | string
    name?: StringWithAggregatesFilter<"Section"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    isPremium?: boolean
    createdAt?: Date | string
    premiumExpiresAt?: Date | string | null
    branch?: string | null
    year?: number | null
    semester?: number | null
    attendance?: AttendanceCreateNestedManyWithoutStudentInput
    premiumFeatures?: PremiumFeatureCreateNestedManyWithoutUsersInput
    GoogleToken?: GoogleTokenCreateNestedManyWithoutUserInput
    RecentActivity?: RecentActivityCreateNestedManyWithoutUserInput
    TeacherProfile?: TeacherCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    isPremium?: boolean
    createdAt?: Date | string
    premiumExpiresAt?: Date | string | null
    branch?: string | null
    year?: number | null
    semester?: number | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    premiumFeatures?: PremiumFeatureUncheckedCreateNestedManyWithoutUsersInput
    GoogleToken?: GoogleTokenUncheckedCreateNestedManyWithoutUserInput
    RecentActivity?: RecentActivityUncheckedCreateNestedManyWithoutUserInput
    TeacherProfile?: TeacherUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    premiumFeatures?: PremiumFeatureUpdateManyWithoutUsersNestedInput
    GoogleToken?: GoogleTokenUpdateManyWithoutUserNestedInput
    RecentActivity?: RecentActivityUpdateManyWithoutUserNestedInput
    TeacherProfile?: TeacherUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    premiumFeatures?: PremiumFeatureUncheckedUpdateManyWithoutUsersNestedInput
    GoogleToken?: GoogleTokenUncheckedUpdateManyWithoutUserNestedInput
    RecentActivity?: RecentActivityUncheckedUpdateManyWithoutUserNestedInput
    TeacherProfile?: TeacherUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    isPremium?: boolean
    createdAt?: Date | string
    premiumExpiresAt?: Date | string | null
    branch?: string | null
    year?: number | null
    semester?: number | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TeacherCreateInput = {
    id?: string
    department?: string | null
    designation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTeacherProfileInput
    subjects?: TeacherSubjectCreateNestedManyWithoutTeacherInput
    classes?: ClassSessionCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateInput = {
    id?: string
    userId: string
    department?: string | null
    designation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: TeacherSubjectUncheckedCreateNestedManyWithoutTeacherInput
    classes?: ClassSessionUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTeacherProfileNestedInput
    subjects?: TeacherSubjectUpdateManyWithoutTeacherNestedInput
    classes?: ClassSessionUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: TeacherSubjectUncheckedUpdateManyWithoutTeacherNestedInput
    classes?: ClassSessionUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherCreateManyInput = {
    id?: string
    userId: string
    department?: string | null
    designation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherSubjectCreateInput = {
    id?: string
    teacher: TeacherCreateNestedOneWithoutSubjectsInput
    subject: SubjectCreateNestedOneWithoutTeacherSubjectsInput
    semester: SemesterCreateNestedOneWithoutSubjectsInput
    section: SectionCreateNestedOneWithoutSubjectsInput
  }

  export type TeacherSubjectUncheckedCreateInput = {
    id?: string
    teacherId: string
    subjectId: string
    semesterId: string
    sectionId: string
  }

  export type TeacherSubjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacher?: TeacherUpdateOneRequiredWithoutSubjectsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutTeacherSubjectsNestedInput
    semester?: SemesterUpdateOneRequiredWithoutSubjectsNestedInput
    section?: SectionUpdateOneRequiredWithoutSubjectsNestedInput
  }

  export type TeacherSubjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherSubjectCreateManyInput = {
    id?: string
    teacherId: string
    subjectId: string
    semesterId: string
    sectionId: string
  }

  export type TeacherSubjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherSubjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceCreateInput = {
    id?: string
    subject: string
    date?: Date | string
    status: string
    markedBy: string
    student: UserCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: string
    studentId: string
    subject: string
    date?: Date | string
    status: string
    markedBy: string
  }

  export type AttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    markedBy?: StringFieldUpdateOperationsInput | string
    student?: UserUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    markedBy?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceCreateManyInput = {
    id?: string
    studentId: string
    subject: string
    date?: Date | string
    status: string
    markedBy: string
  }

  export type AttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    markedBy?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    markedBy?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceTokenCreateInput = {
    id?: string
    token: string
    subject: string
    professorId: string
    issuedAt?: Date | string
    expiresAt: Date | string
  }

  export type AttendanceTokenUncheckedCreateInput = {
    id?: string
    token: string
    subject: string
    professorId: string
    issuedAt?: Date | string
    expiresAt: Date | string
  }

  export type AttendanceTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    professorId?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    professorId?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceTokenCreateManyInput = {
    id?: string
    token: string
    subject: string
    professorId: string
    issuedAt?: Date | string
    expiresAt: Date | string
  }

  export type AttendanceTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    professorId?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    professorId?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PremiumFeatureCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutPremiumFeaturesInput
  }

  export type PremiumFeatureUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutPremiumFeaturesInput
  }

  export type PremiumFeatureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutPremiumFeaturesNestedInput
  }

  export type PremiumFeatureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutPremiumFeaturesNestedInput
  }

  export type PremiumFeatureCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type PremiumFeatureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PremiumFeatureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    type: $Enums.EventType
    active?: boolean
    createdBy: string
    createdAt?: Date | string
  }

  export type EventUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    type: $Enums.EventType
    active?: boolean
    createdBy: string
    createdAt?: Date | string
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    active?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    active?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    type: $Enums.EventType
    active?: boolean
    createdBy: string
    createdAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    active?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    active?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoogleTokenCreateInput = {
    accessToken: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGoogleTokenInput
  }

  export type GoogleTokenUncheckedCreateInput = {
    userId: string
    accessToken: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoogleTokenUpdateInput = {
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGoogleTokenNestedInput
  }

  export type GoogleTokenUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoogleTokenCreateManyInput = {
    userId: string
    accessToken: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoogleTokenUpdateManyMutationInput = {
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoogleTokenUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecentActivityCreateInput = {
    id?: string
    userName?: string | null
    action: string
    timestamp?: Date | string
    user?: UserCreateNestedOneWithoutRecentActivityInput
  }

  export type RecentActivityUncheckedCreateInput = {
    id?: string
    userId?: string | null
    userName?: string | null
    action: string
    timestamp?: Date | string
  }

  export type RecentActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutRecentActivityNestedInput
  }

  export type RecentActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecentActivityCreateManyInput = {
    id?: string
    userId?: string | null
    userName?: string | null
    action: string
    timestamp?: Date | string
  }

  export type RecentActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecentActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportRequestCreateInput = {
    id?: string
    name: string
    email: string
    message: string
    createdAt?: Date | string
  }

  export type SupportRequestUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    message: string
    createdAt?: Date | string
  }

  export type SupportRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportRequestCreateManyInput = {
    id?: string
    name: string
    email: string
    message: string
    createdAt?: Date | string
  }

  export type SupportRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanConfigCreateInput = {
    id?: string
    name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanConfigUncheckedCreateInput = {
    id?: string
    name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanConfigCreateManyInput = {
    id?: string
    name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassSessionCreateInput = {
    id?: string
    section: string
    semester: number
    weekday: $Enums.Weekday
    room?: string | null
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.SessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    subject: SubjectCreateNestedOneWithoutClassesInput
    teacher: TeacherCreateNestedOneWithoutClassesInput
  }

  export type ClassSessionUncheckedCreateInput = {
    id?: string
    subjectId: string
    section: string
    semester: number
    weekday: $Enums.Weekday
    room?: string | null
    startTime: Date | string
    endTime: Date | string
    teacherId: string
    status?: $Enums.SessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    weekday?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    room?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneRequiredWithoutClassesNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutClassesNestedInput
  }

  export type ClassSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    weekday?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    room?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassSessionCreateManyInput = {
    id?: string
    subjectId: string
    section: string
    semester: number
    weekday: $Enums.Weekday
    room?: string | null
    startTime: Date | string
    endTime: Date | string
    teacherId: string
    status?: $Enums.SessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    weekday?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    room?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    weekday?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    room?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectCreateInput = {
    id?: string
    name: string
    code?: string | null
    classes?: ClassSessionCreateNestedManyWithoutSubjectInput
    teacherSubjects?: TeacherSubjectCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateInput = {
    id?: string
    name: string
    code?: string | null
    classes?: ClassSessionUncheckedCreateNestedManyWithoutSubjectInput
    teacherSubjects?: TeacherSubjectUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    classes?: ClassSessionUpdateManyWithoutSubjectNestedInput
    teacherSubjects?: TeacherSubjectUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    classes?: ClassSessionUncheckedUpdateManyWithoutSubjectNestedInput
    teacherSubjects?: TeacherSubjectUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCreateManyInput = {
    id?: string
    name: string
    code?: string | null
  }

  export type SubjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SemesterCreateInput = {
    id?: string
    name: string
    subjects?: TeacherSubjectCreateNestedManyWithoutSemesterInput
  }

  export type SemesterUncheckedCreateInput = {
    id?: string
    name: string
    subjects?: TeacherSubjectUncheckedCreateNestedManyWithoutSemesterInput
  }

  export type SemesterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subjects?: TeacherSubjectUpdateManyWithoutSemesterNestedInput
  }

  export type SemesterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subjects?: TeacherSubjectUncheckedUpdateManyWithoutSemesterNestedInput
  }

  export type SemesterCreateManyInput = {
    id?: string
    name: string
  }

  export type SemesterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SemesterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SectionCreateInput = {
    id?: string
    name: string
    subjects?: TeacherSubjectCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateInput = {
    id?: string
    name: string
    subjects?: TeacherSubjectUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subjects?: TeacherSubjectUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subjects?: TeacherSubjectUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionCreateManyInput = {
    id?: string
    name: string
  }

  export type SectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type PremiumFeatureListRelationFilter = {
    every?: PremiumFeatureWhereInput
    some?: PremiumFeatureWhereInput
    none?: PremiumFeatureWhereInput
  }

  export type GoogleTokenListRelationFilter = {
    every?: GoogleTokenWhereInput
    some?: GoogleTokenWhereInput
    none?: GoogleTokenWhereInput
  }

  export type RecentActivityListRelationFilter = {
    every?: RecentActivityWhereInput
    some?: RecentActivityWhereInput
    none?: RecentActivityWhereInput
  }

  export type TeacherNullableScalarRelationFilter = {
    is?: TeacherWhereInput | null
    isNot?: TeacherWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PremiumFeatureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GoogleTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecentActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    isPremium?: SortOrder
    createdAt?: SortOrder
    premiumExpiresAt?: SortOrder
    branch?: SortOrder
    year?: SortOrder
    semester?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    year?: SortOrder
    semester?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    isPremium?: SortOrder
    createdAt?: SortOrder
    premiumExpiresAt?: SortOrder
    branch?: SortOrder
    year?: SortOrder
    semester?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    isPremium?: SortOrder
    createdAt?: SortOrder
    premiumExpiresAt?: SortOrder
    branch?: SortOrder
    year?: SortOrder
    semester?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    year?: SortOrder
    semester?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TeacherSubjectListRelationFilter = {
    every?: TeacherSubjectWhereInput
    some?: TeacherSubjectWhereInput
    none?: TeacherSubjectWhereInput
  }

  export type ClassSessionListRelationFilter = {
    every?: ClassSessionWhereInput
    some?: ClassSessionWhereInput
    none?: ClassSessionWhereInput
  }

  export type TeacherSubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    department?: SortOrder
    designation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    department?: SortOrder
    designation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    department?: SortOrder
    designation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherScalarRelationFilter = {
    is?: TeacherWhereInput
    isNot?: TeacherWhereInput
  }

  export type SubjectScalarRelationFilter = {
    is?: SubjectWhereInput
    isNot?: SubjectWhereInput
  }

  export type SemesterScalarRelationFilter = {
    is?: SemesterWhereInput
    isNot?: SemesterWhereInput
  }

  export type SectionScalarRelationFilter = {
    is?: SectionWhereInput
    isNot?: SectionWhereInput
  }

  export type TeacherSubjectCountOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    subjectId?: SortOrder
    semesterId?: SortOrder
    sectionId?: SortOrder
  }

  export type TeacherSubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    subjectId?: SortOrder
    semesterId?: SortOrder
    sectionId?: SortOrder
  }

  export type TeacherSubjectMinOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    subjectId?: SortOrder
    semesterId?: SortOrder
    sectionId?: SortOrder
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subject?: SortOrder
    date?: SortOrder
    status?: SortOrder
    markedBy?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subject?: SortOrder
    date?: SortOrder
    status?: SortOrder
    markedBy?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subject?: SortOrder
    date?: SortOrder
    status?: SortOrder
    markedBy?: SortOrder
  }

  export type AttendanceTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    subject?: SortOrder
    professorId?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type AttendanceTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    subject?: SortOrder
    professorId?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type AttendanceTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    subject?: SortOrder
    professorId?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PremiumFeatureCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type PremiumFeatureMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type PremiumFeatureMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    type?: SortOrder
    active?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    type?: SortOrder
    active?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    type?: SortOrder
    active?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }

  export type GoogleTokenCountOrderByAggregateInput = {
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoogleTokenMaxOrderByAggregateInput = {
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoogleTokenMinOrderByAggregateInput = {
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type RecentActivityCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
  }

  export type RecentActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
  }

  export type RecentActivityMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
  }

  export type SupportRequestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type SupportRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type SupportRequestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
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

  export type PlanConfigCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanConfigAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type PlanConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanConfigMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanConfigSumOrderByAggregateInput = {
    price?: SortOrder
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

  export type EnumWeekdayFilter<$PrismaModel = never> = {
    equals?: $Enums.Weekday | EnumWeekdayFieldRefInput<$PrismaModel>
    in?: $Enums.Weekday[] | ListEnumWeekdayFieldRefInput<$PrismaModel>
    notIn?: $Enums.Weekday[] | ListEnumWeekdayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekdayFilter<$PrismaModel> | $Enums.Weekday
  }

  export type EnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type ClassSessionCountOrderByAggregateInput = {
    id?: SortOrder
    subjectId?: SortOrder
    section?: SortOrder
    semester?: SortOrder
    weekday?: SortOrder
    room?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    teacherId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassSessionAvgOrderByAggregateInput = {
    semester?: SortOrder
  }

  export type ClassSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    subjectId?: SortOrder
    section?: SortOrder
    semester?: SortOrder
    weekday?: SortOrder
    room?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    teacherId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassSessionMinOrderByAggregateInput = {
    id?: SortOrder
    subjectId?: SortOrder
    section?: SortOrder
    semester?: SortOrder
    weekday?: SortOrder
    room?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    teacherId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassSessionSumOrderByAggregateInput = {
    semester?: SortOrder
  }

  export type EnumWeekdayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Weekday | EnumWeekdayFieldRefInput<$PrismaModel>
    in?: $Enums.Weekday[] | ListEnumWeekdayFieldRefInput<$PrismaModel>
    notIn?: $Enums.Weekday[] | ListEnumWeekdayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekdayWithAggregatesFilter<$PrismaModel> | $Enums.Weekday
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeekdayFilter<$PrismaModel>
    _max?: NestedEnumWeekdayFilter<$PrismaModel>
  }

  export type EnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type SubjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
  }

  export type SubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
  }

  export type SubjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
  }

  export type SemesterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SemesterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SemesterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SectionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SectionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SectionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AttendanceCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type PremiumFeatureCreateNestedManyWithoutUsersInput = {
    create?: XOR<PremiumFeatureCreateWithoutUsersInput, PremiumFeatureUncheckedCreateWithoutUsersInput> | PremiumFeatureCreateWithoutUsersInput[] | PremiumFeatureUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PremiumFeatureCreateOrConnectWithoutUsersInput | PremiumFeatureCreateOrConnectWithoutUsersInput[]
    connect?: PremiumFeatureWhereUniqueInput | PremiumFeatureWhereUniqueInput[]
  }

  export type GoogleTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<GoogleTokenCreateWithoutUserInput, GoogleTokenUncheckedCreateWithoutUserInput> | GoogleTokenCreateWithoutUserInput[] | GoogleTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoogleTokenCreateOrConnectWithoutUserInput | GoogleTokenCreateOrConnectWithoutUserInput[]
    createMany?: GoogleTokenCreateManyUserInputEnvelope
    connect?: GoogleTokenWhereUniqueInput | GoogleTokenWhereUniqueInput[]
  }

  export type RecentActivityCreateNestedManyWithoutUserInput = {
    create?: XOR<RecentActivityCreateWithoutUserInput, RecentActivityUncheckedCreateWithoutUserInput> | RecentActivityCreateWithoutUserInput[] | RecentActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecentActivityCreateOrConnectWithoutUserInput | RecentActivityCreateOrConnectWithoutUserInput[]
    createMany?: RecentActivityCreateManyUserInputEnvelope
    connect?: RecentActivityWhereUniqueInput | RecentActivityWhereUniqueInput[]
  }

  export type TeacherCreateNestedOneWithoutUserInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    connect?: TeacherWhereUniqueInput
  }

  export type AttendanceUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type PremiumFeatureUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<PremiumFeatureCreateWithoutUsersInput, PremiumFeatureUncheckedCreateWithoutUsersInput> | PremiumFeatureCreateWithoutUsersInput[] | PremiumFeatureUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PremiumFeatureCreateOrConnectWithoutUsersInput | PremiumFeatureCreateOrConnectWithoutUsersInput[]
    connect?: PremiumFeatureWhereUniqueInput | PremiumFeatureWhereUniqueInput[]
  }

  export type GoogleTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GoogleTokenCreateWithoutUserInput, GoogleTokenUncheckedCreateWithoutUserInput> | GoogleTokenCreateWithoutUserInput[] | GoogleTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoogleTokenCreateOrConnectWithoutUserInput | GoogleTokenCreateOrConnectWithoutUserInput[]
    createMany?: GoogleTokenCreateManyUserInputEnvelope
    connect?: GoogleTokenWhereUniqueInput | GoogleTokenWhereUniqueInput[]
  }

  export type RecentActivityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RecentActivityCreateWithoutUserInput, RecentActivityUncheckedCreateWithoutUserInput> | RecentActivityCreateWithoutUserInput[] | RecentActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecentActivityCreateOrConnectWithoutUserInput | RecentActivityCreateOrConnectWithoutUserInput[]
    createMany?: RecentActivityCreateManyUserInputEnvelope
    connect?: RecentActivityWhereUniqueInput | RecentActivityWhereUniqueInput[]
  }

  export type TeacherUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    connect?: TeacherWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AttendanceUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutStudentInput | AttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutStudentInput | AttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutStudentInput | AttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type PremiumFeatureUpdateManyWithoutUsersNestedInput = {
    create?: XOR<PremiumFeatureCreateWithoutUsersInput, PremiumFeatureUncheckedCreateWithoutUsersInput> | PremiumFeatureCreateWithoutUsersInput[] | PremiumFeatureUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PremiumFeatureCreateOrConnectWithoutUsersInput | PremiumFeatureCreateOrConnectWithoutUsersInput[]
    upsert?: PremiumFeatureUpsertWithWhereUniqueWithoutUsersInput | PremiumFeatureUpsertWithWhereUniqueWithoutUsersInput[]
    set?: PremiumFeatureWhereUniqueInput | PremiumFeatureWhereUniqueInput[]
    disconnect?: PremiumFeatureWhereUniqueInput | PremiumFeatureWhereUniqueInput[]
    delete?: PremiumFeatureWhereUniqueInput | PremiumFeatureWhereUniqueInput[]
    connect?: PremiumFeatureWhereUniqueInput | PremiumFeatureWhereUniqueInput[]
    update?: PremiumFeatureUpdateWithWhereUniqueWithoutUsersInput | PremiumFeatureUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: PremiumFeatureUpdateManyWithWhereWithoutUsersInput | PremiumFeatureUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: PremiumFeatureScalarWhereInput | PremiumFeatureScalarWhereInput[]
  }

  export type GoogleTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoogleTokenCreateWithoutUserInput, GoogleTokenUncheckedCreateWithoutUserInput> | GoogleTokenCreateWithoutUserInput[] | GoogleTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoogleTokenCreateOrConnectWithoutUserInput | GoogleTokenCreateOrConnectWithoutUserInput[]
    upsert?: GoogleTokenUpsertWithWhereUniqueWithoutUserInput | GoogleTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoogleTokenCreateManyUserInputEnvelope
    set?: GoogleTokenWhereUniqueInput | GoogleTokenWhereUniqueInput[]
    disconnect?: GoogleTokenWhereUniqueInput | GoogleTokenWhereUniqueInput[]
    delete?: GoogleTokenWhereUniqueInput | GoogleTokenWhereUniqueInput[]
    connect?: GoogleTokenWhereUniqueInput | GoogleTokenWhereUniqueInput[]
    update?: GoogleTokenUpdateWithWhereUniqueWithoutUserInput | GoogleTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoogleTokenUpdateManyWithWhereWithoutUserInput | GoogleTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoogleTokenScalarWhereInput | GoogleTokenScalarWhereInput[]
  }

  export type RecentActivityUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecentActivityCreateWithoutUserInput, RecentActivityUncheckedCreateWithoutUserInput> | RecentActivityCreateWithoutUserInput[] | RecentActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecentActivityCreateOrConnectWithoutUserInput | RecentActivityCreateOrConnectWithoutUserInput[]
    upsert?: RecentActivityUpsertWithWhereUniqueWithoutUserInput | RecentActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecentActivityCreateManyUserInputEnvelope
    set?: RecentActivityWhereUniqueInput | RecentActivityWhereUniqueInput[]
    disconnect?: RecentActivityWhereUniqueInput | RecentActivityWhereUniqueInput[]
    delete?: RecentActivityWhereUniqueInput | RecentActivityWhereUniqueInput[]
    connect?: RecentActivityWhereUniqueInput | RecentActivityWhereUniqueInput[]
    update?: RecentActivityUpdateWithWhereUniqueWithoutUserInput | RecentActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecentActivityUpdateManyWithWhereWithoutUserInput | RecentActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecentActivityScalarWhereInput | RecentActivityScalarWhereInput[]
  }

  export type TeacherUpdateOneWithoutUserNestedInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    upsert?: TeacherUpsertWithoutUserInput
    disconnect?: TeacherWhereInput | boolean
    delete?: TeacherWhereInput | boolean
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutUserInput, TeacherUpdateWithoutUserInput>, TeacherUncheckedUpdateWithoutUserInput>
  }

  export type AttendanceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutStudentInput | AttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutStudentInput | AttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutStudentInput | AttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type PremiumFeatureUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<PremiumFeatureCreateWithoutUsersInput, PremiumFeatureUncheckedCreateWithoutUsersInput> | PremiumFeatureCreateWithoutUsersInput[] | PremiumFeatureUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PremiumFeatureCreateOrConnectWithoutUsersInput | PremiumFeatureCreateOrConnectWithoutUsersInput[]
    upsert?: PremiumFeatureUpsertWithWhereUniqueWithoutUsersInput | PremiumFeatureUpsertWithWhereUniqueWithoutUsersInput[]
    set?: PremiumFeatureWhereUniqueInput | PremiumFeatureWhereUniqueInput[]
    disconnect?: PremiumFeatureWhereUniqueInput | PremiumFeatureWhereUniqueInput[]
    delete?: PremiumFeatureWhereUniqueInput | PremiumFeatureWhereUniqueInput[]
    connect?: PremiumFeatureWhereUniqueInput | PremiumFeatureWhereUniqueInput[]
    update?: PremiumFeatureUpdateWithWhereUniqueWithoutUsersInput | PremiumFeatureUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: PremiumFeatureUpdateManyWithWhereWithoutUsersInput | PremiumFeatureUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: PremiumFeatureScalarWhereInput | PremiumFeatureScalarWhereInput[]
  }

  export type GoogleTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoogleTokenCreateWithoutUserInput, GoogleTokenUncheckedCreateWithoutUserInput> | GoogleTokenCreateWithoutUserInput[] | GoogleTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoogleTokenCreateOrConnectWithoutUserInput | GoogleTokenCreateOrConnectWithoutUserInput[]
    upsert?: GoogleTokenUpsertWithWhereUniqueWithoutUserInput | GoogleTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoogleTokenCreateManyUserInputEnvelope
    set?: GoogleTokenWhereUniqueInput | GoogleTokenWhereUniqueInput[]
    disconnect?: GoogleTokenWhereUniqueInput | GoogleTokenWhereUniqueInput[]
    delete?: GoogleTokenWhereUniqueInput | GoogleTokenWhereUniqueInput[]
    connect?: GoogleTokenWhereUniqueInput | GoogleTokenWhereUniqueInput[]
    update?: GoogleTokenUpdateWithWhereUniqueWithoutUserInput | GoogleTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoogleTokenUpdateManyWithWhereWithoutUserInput | GoogleTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoogleTokenScalarWhereInput | GoogleTokenScalarWhereInput[]
  }

  export type RecentActivityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecentActivityCreateWithoutUserInput, RecentActivityUncheckedCreateWithoutUserInput> | RecentActivityCreateWithoutUserInput[] | RecentActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecentActivityCreateOrConnectWithoutUserInput | RecentActivityCreateOrConnectWithoutUserInput[]
    upsert?: RecentActivityUpsertWithWhereUniqueWithoutUserInput | RecentActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecentActivityCreateManyUserInputEnvelope
    set?: RecentActivityWhereUniqueInput | RecentActivityWhereUniqueInput[]
    disconnect?: RecentActivityWhereUniqueInput | RecentActivityWhereUniqueInput[]
    delete?: RecentActivityWhereUniqueInput | RecentActivityWhereUniqueInput[]
    connect?: RecentActivityWhereUniqueInput | RecentActivityWhereUniqueInput[]
    update?: RecentActivityUpdateWithWhereUniqueWithoutUserInput | RecentActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecentActivityUpdateManyWithWhereWithoutUserInput | RecentActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecentActivityScalarWhereInput | RecentActivityScalarWhereInput[]
  }

  export type TeacherUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    upsert?: TeacherUpsertWithoutUserInput
    disconnect?: TeacherWhereInput | boolean
    delete?: TeacherWhereInput | boolean
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutUserInput, TeacherUpdateWithoutUserInput>, TeacherUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutTeacherProfileInput = {
    create?: XOR<UserCreateWithoutTeacherProfileInput, UserUncheckedCreateWithoutTeacherProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherProfileInput
    connect?: UserWhereUniqueInput
  }

  export type TeacherSubjectCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput> | TeacherSubjectCreateWithoutTeacherInput[] | TeacherSubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutTeacherInput | TeacherSubjectCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherSubjectCreateManyTeacherInputEnvelope
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
  }

  export type ClassSessionCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ClassSessionCreateWithoutTeacherInput, ClassSessionUncheckedCreateWithoutTeacherInput> | ClassSessionCreateWithoutTeacherInput[] | ClassSessionUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassSessionCreateOrConnectWithoutTeacherInput | ClassSessionCreateOrConnectWithoutTeacherInput[]
    createMany?: ClassSessionCreateManyTeacherInputEnvelope
    connect?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
  }

  export type TeacherSubjectUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput> | TeacherSubjectCreateWithoutTeacherInput[] | TeacherSubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutTeacherInput | TeacherSubjectCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherSubjectCreateManyTeacherInputEnvelope
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
  }

  export type ClassSessionUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ClassSessionCreateWithoutTeacherInput, ClassSessionUncheckedCreateWithoutTeacherInput> | ClassSessionCreateWithoutTeacherInput[] | ClassSessionUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassSessionCreateOrConnectWithoutTeacherInput | ClassSessionCreateOrConnectWithoutTeacherInput[]
    createMany?: ClassSessionCreateManyTeacherInputEnvelope
    connect?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTeacherProfileNestedInput = {
    create?: XOR<UserCreateWithoutTeacherProfileInput, UserUncheckedCreateWithoutTeacherProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherProfileInput
    upsert?: UserUpsertWithoutTeacherProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeacherProfileInput, UserUpdateWithoutTeacherProfileInput>, UserUncheckedUpdateWithoutTeacherProfileInput>
  }

  export type TeacherSubjectUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput> | TeacherSubjectCreateWithoutTeacherInput[] | TeacherSubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutTeacherInput | TeacherSubjectCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherSubjectUpsertWithWhereUniqueWithoutTeacherInput | TeacherSubjectUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherSubjectCreateManyTeacherInputEnvelope
    set?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    disconnect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    delete?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    update?: TeacherSubjectUpdateWithWhereUniqueWithoutTeacherInput | TeacherSubjectUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherSubjectUpdateManyWithWhereWithoutTeacherInput | TeacherSubjectUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
  }

  export type ClassSessionUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ClassSessionCreateWithoutTeacherInput, ClassSessionUncheckedCreateWithoutTeacherInput> | ClassSessionCreateWithoutTeacherInput[] | ClassSessionUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassSessionCreateOrConnectWithoutTeacherInput | ClassSessionCreateOrConnectWithoutTeacherInput[]
    upsert?: ClassSessionUpsertWithWhereUniqueWithoutTeacherInput | ClassSessionUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ClassSessionCreateManyTeacherInputEnvelope
    set?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    disconnect?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    delete?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    connect?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    update?: ClassSessionUpdateWithWhereUniqueWithoutTeacherInput | ClassSessionUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ClassSessionUpdateManyWithWhereWithoutTeacherInput | ClassSessionUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ClassSessionScalarWhereInput | ClassSessionScalarWhereInput[]
  }

  export type TeacherSubjectUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput> | TeacherSubjectCreateWithoutTeacherInput[] | TeacherSubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutTeacherInput | TeacherSubjectCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherSubjectUpsertWithWhereUniqueWithoutTeacherInput | TeacherSubjectUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherSubjectCreateManyTeacherInputEnvelope
    set?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    disconnect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    delete?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    update?: TeacherSubjectUpdateWithWhereUniqueWithoutTeacherInput | TeacherSubjectUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherSubjectUpdateManyWithWhereWithoutTeacherInput | TeacherSubjectUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
  }

  export type ClassSessionUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ClassSessionCreateWithoutTeacherInput, ClassSessionUncheckedCreateWithoutTeacherInput> | ClassSessionCreateWithoutTeacherInput[] | ClassSessionUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassSessionCreateOrConnectWithoutTeacherInput | ClassSessionCreateOrConnectWithoutTeacherInput[]
    upsert?: ClassSessionUpsertWithWhereUniqueWithoutTeacherInput | ClassSessionUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ClassSessionCreateManyTeacherInputEnvelope
    set?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    disconnect?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    delete?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    connect?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    update?: ClassSessionUpdateWithWhereUniqueWithoutTeacherInput | ClassSessionUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ClassSessionUpdateManyWithWhereWithoutTeacherInput | ClassSessionUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ClassSessionScalarWhereInput | ClassSessionScalarWhereInput[]
  }

  export type TeacherCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<TeacherCreateWithoutSubjectsInput, TeacherUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutSubjectsInput
    connect?: TeacherWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutTeacherSubjectsInput = {
    create?: XOR<SubjectCreateWithoutTeacherSubjectsInput, SubjectUncheckedCreateWithoutTeacherSubjectsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherSubjectsInput
    connect?: SubjectWhereUniqueInput
  }

  export type SemesterCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<SemesterCreateWithoutSubjectsInput, SemesterUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: SemesterCreateOrConnectWithoutSubjectsInput
    connect?: SemesterWhereUniqueInput
  }

  export type SectionCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<SectionCreateWithoutSubjectsInput, SectionUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutSubjectsInput
    connect?: SectionWhereUniqueInput
  }

  export type TeacherUpdateOneRequiredWithoutSubjectsNestedInput = {
    create?: XOR<TeacherCreateWithoutSubjectsInput, TeacherUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutSubjectsInput
    upsert?: TeacherUpsertWithoutSubjectsInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutSubjectsInput, TeacherUpdateWithoutSubjectsInput>, TeacherUncheckedUpdateWithoutSubjectsInput>
  }

  export type SubjectUpdateOneRequiredWithoutTeacherSubjectsNestedInput = {
    create?: XOR<SubjectCreateWithoutTeacherSubjectsInput, SubjectUncheckedCreateWithoutTeacherSubjectsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherSubjectsInput
    upsert?: SubjectUpsertWithoutTeacherSubjectsInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutTeacherSubjectsInput, SubjectUpdateWithoutTeacherSubjectsInput>, SubjectUncheckedUpdateWithoutTeacherSubjectsInput>
  }

  export type SemesterUpdateOneRequiredWithoutSubjectsNestedInput = {
    create?: XOR<SemesterCreateWithoutSubjectsInput, SemesterUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: SemesterCreateOrConnectWithoutSubjectsInput
    upsert?: SemesterUpsertWithoutSubjectsInput
    connect?: SemesterWhereUniqueInput
    update?: XOR<XOR<SemesterUpdateToOneWithWhereWithoutSubjectsInput, SemesterUpdateWithoutSubjectsInput>, SemesterUncheckedUpdateWithoutSubjectsInput>
  }

  export type SectionUpdateOneRequiredWithoutSubjectsNestedInput = {
    create?: XOR<SectionCreateWithoutSubjectsInput, SectionUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutSubjectsInput
    upsert?: SectionUpsertWithoutSubjectsInput
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutSubjectsInput, SectionUpdateWithoutSubjectsInput>, SectionUncheckedUpdateWithoutSubjectsInput>
  }

  export type UserCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<UserCreateWithoutAttendanceInput, UserUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendanceInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<UserCreateWithoutAttendanceInput, UserUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendanceInput
    upsert?: UserUpsertWithoutAttendanceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAttendanceInput, UserUpdateWithoutAttendanceInput>, UserUncheckedUpdateWithoutAttendanceInput>
  }

  export type UserCreateNestedManyWithoutPremiumFeaturesInput = {
    create?: XOR<UserCreateWithoutPremiumFeaturesInput, UserUncheckedCreateWithoutPremiumFeaturesInput> | UserCreateWithoutPremiumFeaturesInput[] | UserUncheckedCreateWithoutPremiumFeaturesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPremiumFeaturesInput | UserCreateOrConnectWithoutPremiumFeaturesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutPremiumFeaturesInput = {
    create?: XOR<UserCreateWithoutPremiumFeaturesInput, UserUncheckedCreateWithoutPremiumFeaturesInput> | UserCreateWithoutPremiumFeaturesInput[] | UserUncheckedCreateWithoutPremiumFeaturesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPremiumFeaturesInput | UserCreateOrConnectWithoutPremiumFeaturesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutPremiumFeaturesNestedInput = {
    create?: XOR<UserCreateWithoutPremiumFeaturesInput, UserUncheckedCreateWithoutPremiumFeaturesInput> | UserCreateWithoutPremiumFeaturesInput[] | UserUncheckedCreateWithoutPremiumFeaturesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPremiumFeaturesInput | UserCreateOrConnectWithoutPremiumFeaturesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPremiumFeaturesInput | UserUpsertWithWhereUniqueWithoutPremiumFeaturesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPremiumFeaturesInput | UserUpdateWithWhereUniqueWithoutPremiumFeaturesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPremiumFeaturesInput | UserUpdateManyWithWhereWithoutPremiumFeaturesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutPremiumFeaturesNestedInput = {
    create?: XOR<UserCreateWithoutPremiumFeaturesInput, UserUncheckedCreateWithoutPremiumFeaturesInput> | UserCreateWithoutPremiumFeaturesInput[] | UserUncheckedCreateWithoutPremiumFeaturesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPremiumFeaturesInput | UserCreateOrConnectWithoutPremiumFeaturesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPremiumFeaturesInput | UserUpsertWithWhereUniqueWithoutPremiumFeaturesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPremiumFeaturesInput | UserUpdateWithWhereUniqueWithoutPremiumFeaturesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPremiumFeaturesInput | UserUpdateManyWithWhereWithoutPremiumFeaturesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type EnumEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.EventType
  }

  export type UserCreateNestedOneWithoutGoogleTokenInput = {
    create?: XOR<UserCreateWithoutGoogleTokenInput, UserUncheckedCreateWithoutGoogleTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoogleTokenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGoogleTokenNestedInput = {
    create?: XOR<UserCreateWithoutGoogleTokenInput, UserUncheckedCreateWithoutGoogleTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoogleTokenInput
    upsert?: UserUpsertWithoutGoogleTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGoogleTokenInput, UserUpdateWithoutGoogleTokenInput>, UserUncheckedUpdateWithoutGoogleTokenInput>
  }

  export type UserCreateNestedOneWithoutRecentActivityInput = {
    create?: XOR<UserCreateWithoutRecentActivityInput, UserUncheckedCreateWithoutRecentActivityInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecentActivityInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutRecentActivityNestedInput = {
    create?: XOR<UserCreateWithoutRecentActivityInput, UserUncheckedCreateWithoutRecentActivityInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecentActivityInput
    upsert?: UserUpsertWithoutRecentActivityInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecentActivityInput, UserUpdateWithoutRecentActivityInput>, UserUncheckedUpdateWithoutRecentActivityInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubjectCreateNestedOneWithoutClassesInput = {
    create?: XOR<SubjectCreateWithoutClassesInput, SubjectUncheckedCreateWithoutClassesInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutClassesInput
    connect?: SubjectWhereUniqueInput
  }

  export type TeacherCreateNestedOneWithoutClassesInput = {
    create?: XOR<TeacherCreateWithoutClassesInput, TeacherUncheckedCreateWithoutClassesInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutClassesInput
    connect?: TeacherWhereUniqueInput
  }

  export type EnumWeekdayFieldUpdateOperationsInput = {
    set?: $Enums.Weekday
  }

  export type EnumSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SessionStatus
  }

  export type SubjectUpdateOneRequiredWithoutClassesNestedInput = {
    create?: XOR<SubjectCreateWithoutClassesInput, SubjectUncheckedCreateWithoutClassesInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutClassesInput
    upsert?: SubjectUpsertWithoutClassesInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutClassesInput, SubjectUpdateWithoutClassesInput>, SubjectUncheckedUpdateWithoutClassesInput>
  }

  export type TeacherUpdateOneRequiredWithoutClassesNestedInput = {
    create?: XOR<TeacherCreateWithoutClassesInput, TeacherUncheckedCreateWithoutClassesInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutClassesInput
    upsert?: TeacherUpsertWithoutClassesInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutClassesInput, TeacherUpdateWithoutClassesInput>, TeacherUncheckedUpdateWithoutClassesInput>
  }

  export type ClassSessionCreateNestedManyWithoutSubjectInput = {
    create?: XOR<ClassSessionCreateWithoutSubjectInput, ClassSessionUncheckedCreateWithoutSubjectInput> | ClassSessionCreateWithoutSubjectInput[] | ClassSessionUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ClassSessionCreateOrConnectWithoutSubjectInput | ClassSessionCreateOrConnectWithoutSubjectInput[]
    createMany?: ClassSessionCreateManySubjectInputEnvelope
    connect?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
  }

  export type TeacherSubjectCreateNestedManyWithoutSubjectInput = {
    create?: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput> | TeacherSubjectCreateWithoutSubjectInput[] | TeacherSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutSubjectInput | TeacherSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: TeacherSubjectCreateManySubjectInputEnvelope
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
  }

  export type ClassSessionUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<ClassSessionCreateWithoutSubjectInput, ClassSessionUncheckedCreateWithoutSubjectInput> | ClassSessionCreateWithoutSubjectInput[] | ClassSessionUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ClassSessionCreateOrConnectWithoutSubjectInput | ClassSessionCreateOrConnectWithoutSubjectInput[]
    createMany?: ClassSessionCreateManySubjectInputEnvelope
    connect?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
  }

  export type TeacherSubjectUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput> | TeacherSubjectCreateWithoutSubjectInput[] | TeacherSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutSubjectInput | TeacherSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: TeacherSubjectCreateManySubjectInputEnvelope
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
  }

  export type ClassSessionUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<ClassSessionCreateWithoutSubjectInput, ClassSessionUncheckedCreateWithoutSubjectInput> | ClassSessionCreateWithoutSubjectInput[] | ClassSessionUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ClassSessionCreateOrConnectWithoutSubjectInput | ClassSessionCreateOrConnectWithoutSubjectInput[]
    upsert?: ClassSessionUpsertWithWhereUniqueWithoutSubjectInput | ClassSessionUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: ClassSessionCreateManySubjectInputEnvelope
    set?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    disconnect?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    delete?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    connect?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    update?: ClassSessionUpdateWithWhereUniqueWithoutSubjectInput | ClassSessionUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: ClassSessionUpdateManyWithWhereWithoutSubjectInput | ClassSessionUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: ClassSessionScalarWhereInput | ClassSessionScalarWhereInput[]
  }

  export type TeacherSubjectUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput> | TeacherSubjectCreateWithoutSubjectInput[] | TeacherSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutSubjectInput | TeacherSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: TeacherSubjectUpsertWithWhereUniqueWithoutSubjectInput | TeacherSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: TeacherSubjectCreateManySubjectInputEnvelope
    set?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    disconnect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    delete?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    update?: TeacherSubjectUpdateWithWhereUniqueWithoutSubjectInput | TeacherSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: TeacherSubjectUpdateManyWithWhereWithoutSubjectInput | TeacherSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
  }

  export type ClassSessionUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<ClassSessionCreateWithoutSubjectInput, ClassSessionUncheckedCreateWithoutSubjectInput> | ClassSessionCreateWithoutSubjectInput[] | ClassSessionUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: ClassSessionCreateOrConnectWithoutSubjectInput | ClassSessionCreateOrConnectWithoutSubjectInput[]
    upsert?: ClassSessionUpsertWithWhereUniqueWithoutSubjectInput | ClassSessionUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: ClassSessionCreateManySubjectInputEnvelope
    set?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    disconnect?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    delete?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    connect?: ClassSessionWhereUniqueInput | ClassSessionWhereUniqueInput[]
    update?: ClassSessionUpdateWithWhereUniqueWithoutSubjectInput | ClassSessionUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: ClassSessionUpdateManyWithWhereWithoutSubjectInput | ClassSessionUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: ClassSessionScalarWhereInput | ClassSessionScalarWhereInput[]
  }

  export type TeacherSubjectUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput> | TeacherSubjectCreateWithoutSubjectInput[] | TeacherSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutSubjectInput | TeacherSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: TeacherSubjectUpsertWithWhereUniqueWithoutSubjectInput | TeacherSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: TeacherSubjectCreateManySubjectInputEnvelope
    set?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    disconnect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    delete?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    update?: TeacherSubjectUpdateWithWhereUniqueWithoutSubjectInput | TeacherSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: TeacherSubjectUpdateManyWithWhereWithoutSubjectInput | TeacherSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
  }

  export type TeacherSubjectCreateNestedManyWithoutSemesterInput = {
    create?: XOR<TeacherSubjectCreateWithoutSemesterInput, TeacherSubjectUncheckedCreateWithoutSemesterInput> | TeacherSubjectCreateWithoutSemesterInput[] | TeacherSubjectUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutSemesterInput | TeacherSubjectCreateOrConnectWithoutSemesterInput[]
    createMany?: TeacherSubjectCreateManySemesterInputEnvelope
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
  }

  export type TeacherSubjectUncheckedCreateNestedManyWithoutSemesterInput = {
    create?: XOR<TeacherSubjectCreateWithoutSemesterInput, TeacherSubjectUncheckedCreateWithoutSemesterInput> | TeacherSubjectCreateWithoutSemesterInput[] | TeacherSubjectUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutSemesterInput | TeacherSubjectCreateOrConnectWithoutSemesterInput[]
    createMany?: TeacherSubjectCreateManySemesterInputEnvelope
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
  }

  export type TeacherSubjectUpdateManyWithoutSemesterNestedInput = {
    create?: XOR<TeacherSubjectCreateWithoutSemesterInput, TeacherSubjectUncheckedCreateWithoutSemesterInput> | TeacherSubjectCreateWithoutSemesterInput[] | TeacherSubjectUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutSemesterInput | TeacherSubjectCreateOrConnectWithoutSemesterInput[]
    upsert?: TeacherSubjectUpsertWithWhereUniqueWithoutSemesterInput | TeacherSubjectUpsertWithWhereUniqueWithoutSemesterInput[]
    createMany?: TeacherSubjectCreateManySemesterInputEnvelope
    set?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    disconnect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    delete?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    update?: TeacherSubjectUpdateWithWhereUniqueWithoutSemesterInput | TeacherSubjectUpdateWithWhereUniqueWithoutSemesterInput[]
    updateMany?: TeacherSubjectUpdateManyWithWhereWithoutSemesterInput | TeacherSubjectUpdateManyWithWhereWithoutSemesterInput[]
    deleteMany?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
  }

  export type TeacherSubjectUncheckedUpdateManyWithoutSemesterNestedInput = {
    create?: XOR<TeacherSubjectCreateWithoutSemesterInput, TeacherSubjectUncheckedCreateWithoutSemesterInput> | TeacherSubjectCreateWithoutSemesterInput[] | TeacherSubjectUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutSemesterInput | TeacherSubjectCreateOrConnectWithoutSemesterInput[]
    upsert?: TeacherSubjectUpsertWithWhereUniqueWithoutSemesterInput | TeacherSubjectUpsertWithWhereUniqueWithoutSemesterInput[]
    createMany?: TeacherSubjectCreateManySemesterInputEnvelope
    set?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    disconnect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    delete?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    update?: TeacherSubjectUpdateWithWhereUniqueWithoutSemesterInput | TeacherSubjectUpdateWithWhereUniqueWithoutSemesterInput[]
    updateMany?: TeacherSubjectUpdateManyWithWhereWithoutSemesterInput | TeacherSubjectUpdateManyWithWhereWithoutSemesterInput[]
    deleteMany?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
  }

  export type TeacherSubjectCreateNestedManyWithoutSectionInput = {
    create?: XOR<TeacherSubjectCreateWithoutSectionInput, TeacherSubjectUncheckedCreateWithoutSectionInput> | TeacherSubjectCreateWithoutSectionInput[] | TeacherSubjectUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutSectionInput | TeacherSubjectCreateOrConnectWithoutSectionInput[]
    createMany?: TeacherSubjectCreateManySectionInputEnvelope
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
  }

  export type TeacherSubjectUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<TeacherSubjectCreateWithoutSectionInput, TeacherSubjectUncheckedCreateWithoutSectionInput> | TeacherSubjectCreateWithoutSectionInput[] | TeacherSubjectUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutSectionInput | TeacherSubjectCreateOrConnectWithoutSectionInput[]
    createMany?: TeacherSubjectCreateManySectionInputEnvelope
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
  }

  export type TeacherSubjectUpdateManyWithoutSectionNestedInput = {
    create?: XOR<TeacherSubjectCreateWithoutSectionInput, TeacherSubjectUncheckedCreateWithoutSectionInput> | TeacherSubjectCreateWithoutSectionInput[] | TeacherSubjectUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutSectionInput | TeacherSubjectCreateOrConnectWithoutSectionInput[]
    upsert?: TeacherSubjectUpsertWithWhereUniqueWithoutSectionInput | TeacherSubjectUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: TeacherSubjectCreateManySectionInputEnvelope
    set?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    disconnect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    delete?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    update?: TeacherSubjectUpdateWithWhereUniqueWithoutSectionInput | TeacherSubjectUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: TeacherSubjectUpdateManyWithWhereWithoutSectionInput | TeacherSubjectUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
  }

  export type TeacherSubjectUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<TeacherSubjectCreateWithoutSectionInput, TeacherSubjectUncheckedCreateWithoutSectionInput> | TeacherSubjectCreateWithoutSectionInput[] | TeacherSubjectUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutSectionInput | TeacherSubjectCreateOrConnectWithoutSectionInput[]
    upsert?: TeacherSubjectUpsertWithWhereUniqueWithoutSectionInput | TeacherSubjectUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: TeacherSubjectCreateManySectionInputEnvelope
    set?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    disconnect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    delete?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    update?: TeacherSubjectUpdateWithWhereUniqueWithoutSectionInput | TeacherSubjectUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: TeacherSubjectUpdateManyWithWhereWithoutSectionInput | TeacherSubjectUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }

  export type NestedEnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
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

  export type NestedEnumWeekdayFilter<$PrismaModel = never> = {
    equals?: $Enums.Weekday | EnumWeekdayFieldRefInput<$PrismaModel>
    in?: $Enums.Weekday[] | ListEnumWeekdayFieldRefInput<$PrismaModel>
    notIn?: $Enums.Weekday[] | ListEnumWeekdayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekdayFilter<$PrismaModel> | $Enums.Weekday
  }

  export type NestedEnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type NestedEnumWeekdayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Weekday | EnumWeekdayFieldRefInput<$PrismaModel>
    in?: $Enums.Weekday[] | ListEnumWeekdayFieldRefInput<$PrismaModel>
    notIn?: $Enums.Weekday[] | ListEnumWeekdayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekdayWithAggregatesFilter<$PrismaModel> | $Enums.Weekday
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeekdayFilter<$PrismaModel>
    _max?: NestedEnumWeekdayFilter<$PrismaModel>
  }

  export type NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type AttendanceCreateWithoutStudentInput = {
    id?: string
    subject: string
    date?: Date | string
    status: string
    markedBy: string
  }

  export type AttendanceUncheckedCreateWithoutStudentInput = {
    id?: string
    subject: string
    date?: Date | string
    status: string
    markedBy: string
  }

  export type AttendanceCreateOrConnectWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceCreateManyStudentInputEnvelope = {
    data: AttendanceCreateManyStudentInput | AttendanceCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type PremiumFeatureCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type PremiumFeatureUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type PremiumFeatureCreateOrConnectWithoutUsersInput = {
    where: PremiumFeatureWhereUniqueInput
    create: XOR<PremiumFeatureCreateWithoutUsersInput, PremiumFeatureUncheckedCreateWithoutUsersInput>
  }

  export type GoogleTokenCreateWithoutUserInput = {
    accessToken: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoogleTokenUncheckedCreateWithoutUserInput = {
    accessToken: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoogleTokenCreateOrConnectWithoutUserInput = {
    where: GoogleTokenWhereUniqueInput
    create: XOR<GoogleTokenCreateWithoutUserInput, GoogleTokenUncheckedCreateWithoutUserInput>
  }

  export type GoogleTokenCreateManyUserInputEnvelope = {
    data: GoogleTokenCreateManyUserInput | GoogleTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RecentActivityCreateWithoutUserInput = {
    id?: string
    userName?: string | null
    action: string
    timestamp?: Date | string
  }

  export type RecentActivityUncheckedCreateWithoutUserInput = {
    id?: string
    userName?: string | null
    action: string
    timestamp?: Date | string
  }

  export type RecentActivityCreateOrConnectWithoutUserInput = {
    where: RecentActivityWhereUniqueInput
    create: XOR<RecentActivityCreateWithoutUserInput, RecentActivityUncheckedCreateWithoutUserInput>
  }

  export type RecentActivityCreateManyUserInputEnvelope = {
    data: RecentActivityCreateManyUserInput | RecentActivityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TeacherCreateWithoutUserInput = {
    id?: string
    department?: string | null
    designation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: TeacherSubjectCreateNestedManyWithoutTeacherInput
    classes?: ClassSessionCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutUserInput = {
    id?: string
    department?: string | null
    designation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: TeacherSubjectUncheckedCreateNestedManyWithoutTeacherInput
    classes?: ClassSessionUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutUserInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
  }

  export type AttendanceUpsertWithWhereUniqueWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutStudentInput, AttendanceUncheckedUpdateWithoutStudentInput>
    create: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutStudentInput, AttendanceUncheckedUpdateWithoutStudentInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutStudentInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutStudentInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: StringFilter<"Attendance"> | string
    studentId?: StringFilter<"Attendance"> | string
    subject?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: StringFilter<"Attendance"> | string
    markedBy?: StringFilter<"Attendance"> | string
  }

  export type PremiumFeatureUpsertWithWhereUniqueWithoutUsersInput = {
    where: PremiumFeatureWhereUniqueInput
    update: XOR<PremiumFeatureUpdateWithoutUsersInput, PremiumFeatureUncheckedUpdateWithoutUsersInput>
    create: XOR<PremiumFeatureCreateWithoutUsersInput, PremiumFeatureUncheckedCreateWithoutUsersInput>
  }

  export type PremiumFeatureUpdateWithWhereUniqueWithoutUsersInput = {
    where: PremiumFeatureWhereUniqueInput
    data: XOR<PremiumFeatureUpdateWithoutUsersInput, PremiumFeatureUncheckedUpdateWithoutUsersInput>
  }

  export type PremiumFeatureUpdateManyWithWhereWithoutUsersInput = {
    where: PremiumFeatureScalarWhereInput
    data: XOR<PremiumFeatureUpdateManyMutationInput, PremiumFeatureUncheckedUpdateManyWithoutUsersInput>
  }

  export type PremiumFeatureScalarWhereInput = {
    AND?: PremiumFeatureScalarWhereInput | PremiumFeatureScalarWhereInput[]
    OR?: PremiumFeatureScalarWhereInput[]
    NOT?: PremiumFeatureScalarWhereInput | PremiumFeatureScalarWhereInput[]
    id?: StringFilter<"PremiumFeature"> | string
    name?: StringFilter<"PremiumFeature"> | string
    createdAt?: DateTimeFilter<"PremiumFeature"> | Date | string
  }

  export type GoogleTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: GoogleTokenWhereUniqueInput
    update: XOR<GoogleTokenUpdateWithoutUserInput, GoogleTokenUncheckedUpdateWithoutUserInput>
    create: XOR<GoogleTokenCreateWithoutUserInput, GoogleTokenUncheckedCreateWithoutUserInput>
  }

  export type GoogleTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: GoogleTokenWhereUniqueInput
    data: XOR<GoogleTokenUpdateWithoutUserInput, GoogleTokenUncheckedUpdateWithoutUserInput>
  }

  export type GoogleTokenUpdateManyWithWhereWithoutUserInput = {
    where: GoogleTokenScalarWhereInput
    data: XOR<GoogleTokenUpdateManyMutationInput, GoogleTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type GoogleTokenScalarWhereInput = {
    AND?: GoogleTokenScalarWhereInput | GoogleTokenScalarWhereInput[]
    OR?: GoogleTokenScalarWhereInput[]
    NOT?: GoogleTokenScalarWhereInput | GoogleTokenScalarWhereInput[]
    userId?: StringFilter<"GoogleToken"> | string
    accessToken?: StringFilter<"GoogleToken"> | string
    refreshToken?: StringNullableFilter<"GoogleToken"> | string | null
    createdAt?: DateTimeFilter<"GoogleToken"> | Date | string
    updatedAt?: DateTimeFilter<"GoogleToken"> | Date | string
  }

  export type RecentActivityUpsertWithWhereUniqueWithoutUserInput = {
    where: RecentActivityWhereUniqueInput
    update: XOR<RecentActivityUpdateWithoutUserInput, RecentActivityUncheckedUpdateWithoutUserInput>
    create: XOR<RecentActivityCreateWithoutUserInput, RecentActivityUncheckedCreateWithoutUserInput>
  }

  export type RecentActivityUpdateWithWhereUniqueWithoutUserInput = {
    where: RecentActivityWhereUniqueInput
    data: XOR<RecentActivityUpdateWithoutUserInput, RecentActivityUncheckedUpdateWithoutUserInput>
  }

  export type RecentActivityUpdateManyWithWhereWithoutUserInput = {
    where: RecentActivityScalarWhereInput
    data: XOR<RecentActivityUpdateManyMutationInput, RecentActivityUncheckedUpdateManyWithoutUserInput>
  }

  export type RecentActivityScalarWhereInput = {
    AND?: RecentActivityScalarWhereInput | RecentActivityScalarWhereInput[]
    OR?: RecentActivityScalarWhereInput[]
    NOT?: RecentActivityScalarWhereInput | RecentActivityScalarWhereInput[]
    id?: StringFilter<"RecentActivity"> | string
    userId?: StringNullableFilter<"RecentActivity"> | string | null
    userName?: StringNullableFilter<"RecentActivity"> | string | null
    action?: StringFilter<"RecentActivity"> | string
    timestamp?: DateTimeFilter<"RecentActivity"> | Date | string
  }

  export type TeacherUpsertWithoutUserInput = {
    update: XOR<TeacherUpdateWithoutUserInput, TeacherUncheckedUpdateWithoutUserInput>
    create: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutUserInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutUserInput, TeacherUncheckedUpdateWithoutUserInput>
  }

  export type TeacherUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: TeacherSubjectUpdateManyWithoutTeacherNestedInput
    classes?: ClassSessionUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: TeacherSubjectUncheckedUpdateManyWithoutTeacherNestedInput
    classes?: ClassSessionUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type UserCreateWithoutTeacherProfileInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    isPremium?: boolean
    createdAt?: Date | string
    premiumExpiresAt?: Date | string | null
    branch?: string | null
    year?: number | null
    semester?: number | null
    attendance?: AttendanceCreateNestedManyWithoutStudentInput
    premiumFeatures?: PremiumFeatureCreateNestedManyWithoutUsersInput
    GoogleToken?: GoogleTokenCreateNestedManyWithoutUserInput
    RecentActivity?: RecentActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeacherProfileInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    isPremium?: boolean
    createdAt?: Date | string
    premiumExpiresAt?: Date | string | null
    branch?: string | null
    year?: number | null
    semester?: number | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    premiumFeatures?: PremiumFeatureUncheckedCreateNestedManyWithoutUsersInput
    GoogleToken?: GoogleTokenUncheckedCreateNestedManyWithoutUserInput
    RecentActivity?: RecentActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeacherProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeacherProfileInput, UserUncheckedCreateWithoutTeacherProfileInput>
  }

  export type TeacherSubjectCreateWithoutTeacherInput = {
    id?: string
    subject: SubjectCreateNestedOneWithoutTeacherSubjectsInput
    semester: SemesterCreateNestedOneWithoutSubjectsInput
    section: SectionCreateNestedOneWithoutSubjectsInput
  }

  export type TeacherSubjectUncheckedCreateWithoutTeacherInput = {
    id?: string
    subjectId: string
    semesterId: string
    sectionId: string
  }

  export type TeacherSubjectCreateOrConnectWithoutTeacherInput = {
    where: TeacherSubjectWhereUniqueInput
    create: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherSubjectCreateManyTeacherInputEnvelope = {
    data: TeacherSubjectCreateManyTeacherInput | TeacherSubjectCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type ClassSessionCreateWithoutTeacherInput = {
    id?: string
    section: string
    semester: number
    weekday: $Enums.Weekday
    room?: string | null
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.SessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    subject: SubjectCreateNestedOneWithoutClassesInput
  }

  export type ClassSessionUncheckedCreateWithoutTeacherInput = {
    id?: string
    subjectId: string
    section: string
    semester: number
    weekday: $Enums.Weekday
    room?: string | null
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.SessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassSessionCreateOrConnectWithoutTeacherInput = {
    where: ClassSessionWhereUniqueInput
    create: XOR<ClassSessionCreateWithoutTeacherInput, ClassSessionUncheckedCreateWithoutTeacherInput>
  }

  export type ClassSessionCreateManyTeacherInputEnvelope = {
    data: ClassSessionCreateManyTeacherInput | ClassSessionCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTeacherProfileInput = {
    update: XOR<UserUpdateWithoutTeacherProfileInput, UserUncheckedUpdateWithoutTeacherProfileInput>
    create: XOR<UserCreateWithoutTeacherProfileInput, UserUncheckedCreateWithoutTeacherProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeacherProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeacherProfileInput, UserUncheckedUpdateWithoutTeacherProfileInput>
  }

  export type UserUpdateWithoutTeacherProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    premiumFeatures?: PremiumFeatureUpdateManyWithoutUsersNestedInput
    GoogleToken?: GoogleTokenUpdateManyWithoutUserNestedInput
    RecentActivity?: RecentActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeacherProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    premiumFeatures?: PremiumFeatureUncheckedUpdateManyWithoutUsersNestedInput
    GoogleToken?: GoogleTokenUncheckedUpdateManyWithoutUserNestedInput
    RecentActivity?: RecentActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TeacherSubjectUpsertWithWhereUniqueWithoutTeacherInput = {
    where: TeacherSubjectWhereUniqueInput
    update: XOR<TeacherSubjectUpdateWithoutTeacherInput, TeacherSubjectUncheckedUpdateWithoutTeacherInput>
    create: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherSubjectUpdateWithWhereUniqueWithoutTeacherInput = {
    where: TeacherSubjectWhereUniqueInput
    data: XOR<TeacherSubjectUpdateWithoutTeacherInput, TeacherSubjectUncheckedUpdateWithoutTeacherInput>
  }

  export type TeacherSubjectUpdateManyWithWhereWithoutTeacherInput = {
    where: TeacherSubjectScalarWhereInput
    data: XOR<TeacherSubjectUpdateManyMutationInput, TeacherSubjectUncheckedUpdateManyWithoutTeacherInput>
  }

  export type TeacherSubjectScalarWhereInput = {
    AND?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
    OR?: TeacherSubjectScalarWhereInput[]
    NOT?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
    id?: StringFilter<"TeacherSubject"> | string
    teacherId?: StringFilter<"TeacherSubject"> | string
    subjectId?: StringFilter<"TeacherSubject"> | string
    semesterId?: StringFilter<"TeacherSubject"> | string
    sectionId?: StringFilter<"TeacherSubject"> | string
  }

  export type ClassSessionUpsertWithWhereUniqueWithoutTeacherInput = {
    where: ClassSessionWhereUniqueInput
    update: XOR<ClassSessionUpdateWithoutTeacherInput, ClassSessionUncheckedUpdateWithoutTeacherInput>
    create: XOR<ClassSessionCreateWithoutTeacherInput, ClassSessionUncheckedCreateWithoutTeacherInput>
  }

  export type ClassSessionUpdateWithWhereUniqueWithoutTeacherInput = {
    where: ClassSessionWhereUniqueInput
    data: XOR<ClassSessionUpdateWithoutTeacherInput, ClassSessionUncheckedUpdateWithoutTeacherInput>
  }

  export type ClassSessionUpdateManyWithWhereWithoutTeacherInput = {
    where: ClassSessionScalarWhereInput
    data: XOR<ClassSessionUpdateManyMutationInput, ClassSessionUncheckedUpdateManyWithoutTeacherInput>
  }

  export type ClassSessionScalarWhereInput = {
    AND?: ClassSessionScalarWhereInput | ClassSessionScalarWhereInput[]
    OR?: ClassSessionScalarWhereInput[]
    NOT?: ClassSessionScalarWhereInput | ClassSessionScalarWhereInput[]
    id?: StringFilter<"ClassSession"> | string
    subjectId?: StringFilter<"ClassSession"> | string
    section?: StringFilter<"ClassSession"> | string
    semester?: IntFilter<"ClassSession"> | number
    weekday?: EnumWeekdayFilter<"ClassSession"> | $Enums.Weekday
    room?: StringNullableFilter<"ClassSession"> | string | null
    startTime?: DateTimeFilter<"ClassSession"> | Date | string
    endTime?: DateTimeFilter<"ClassSession"> | Date | string
    teacherId?: StringFilter<"ClassSession"> | string
    status?: EnumSessionStatusFilter<"ClassSession"> | $Enums.SessionStatus
    createdAt?: DateTimeFilter<"ClassSession"> | Date | string
    updatedAt?: DateTimeFilter<"ClassSession"> | Date | string
  }

  export type TeacherCreateWithoutSubjectsInput = {
    id?: string
    department?: string | null
    designation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTeacherProfileInput
    classes?: ClassSessionCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutSubjectsInput = {
    id?: string
    userId: string
    department?: string | null
    designation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classes?: ClassSessionUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutSubjectsInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutSubjectsInput, TeacherUncheckedCreateWithoutSubjectsInput>
  }

  export type SubjectCreateWithoutTeacherSubjectsInput = {
    id?: string
    name: string
    code?: string | null
    classes?: ClassSessionCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutTeacherSubjectsInput = {
    id?: string
    name: string
    code?: string | null
    classes?: ClassSessionUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutTeacherSubjectsInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutTeacherSubjectsInput, SubjectUncheckedCreateWithoutTeacherSubjectsInput>
  }

  export type SemesterCreateWithoutSubjectsInput = {
    id?: string
    name: string
  }

  export type SemesterUncheckedCreateWithoutSubjectsInput = {
    id?: string
    name: string
  }

  export type SemesterCreateOrConnectWithoutSubjectsInput = {
    where: SemesterWhereUniqueInput
    create: XOR<SemesterCreateWithoutSubjectsInput, SemesterUncheckedCreateWithoutSubjectsInput>
  }

  export type SectionCreateWithoutSubjectsInput = {
    id?: string
    name: string
  }

  export type SectionUncheckedCreateWithoutSubjectsInput = {
    id?: string
    name: string
  }

  export type SectionCreateOrConnectWithoutSubjectsInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutSubjectsInput, SectionUncheckedCreateWithoutSubjectsInput>
  }

  export type TeacherUpsertWithoutSubjectsInput = {
    update: XOR<TeacherUpdateWithoutSubjectsInput, TeacherUncheckedUpdateWithoutSubjectsInput>
    create: XOR<TeacherCreateWithoutSubjectsInput, TeacherUncheckedCreateWithoutSubjectsInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutSubjectsInput, TeacherUncheckedUpdateWithoutSubjectsInput>
  }

  export type TeacherUpdateWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTeacherProfileNestedInput
    classes?: ClassSessionUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ClassSessionUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type SubjectUpsertWithoutTeacherSubjectsInput = {
    update: XOR<SubjectUpdateWithoutTeacherSubjectsInput, SubjectUncheckedUpdateWithoutTeacherSubjectsInput>
    create: XOR<SubjectCreateWithoutTeacherSubjectsInput, SubjectUncheckedCreateWithoutTeacherSubjectsInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutTeacherSubjectsInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutTeacherSubjectsInput, SubjectUncheckedUpdateWithoutTeacherSubjectsInput>
  }

  export type SubjectUpdateWithoutTeacherSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    classes?: ClassSessionUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutTeacherSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    classes?: ClassSessionUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SemesterUpsertWithoutSubjectsInput = {
    update: XOR<SemesterUpdateWithoutSubjectsInput, SemesterUncheckedUpdateWithoutSubjectsInput>
    create: XOR<SemesterCreateWithoutSubjectsInput, SemesterUncheckedCreateWithoutSubjectsInput>
    where?: SemesterWhereInput
  }

  export type SemesterUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: SemesterWhereInput
    data: XOR<SemesterUpdateWithoutSubjectsInput, SemesterUncheckedUpdateWithoutSubjectsInput>
  }

  export type SemesterUpdateWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SemesterUncheckedUpdateWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SectionUpsertWithoutSubjectsInput = {
    update: XOR<SectionUpdateWithoutSubjectsInput, SectionUncheckedUpdateWithoutSubjectsInput>
    create: XOR<SectionCreateWithoutSubjectsInput, SectionUncheckedCreateWithoutSubjectsInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutSubjectsInput, SectionUncheckedUpdateWithoutSubjectsInput>
  }

  export type SectionUpdateWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SectionUncheckedUpdateWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutAttendanceInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    isPremium?: boolean
    createdAt?: Date | string
    premiumExpiresAt?: Date | string | null
    branch?: string | null
    year?: number | null
    semester?: number | null
    premiumFeatures?: PremiumFeatureCreateNestedManyWithoutUsersInput
    GoogleToken?: GoogleTokenCreateNestedManyWithoutUserInput
    RecentActivity?: RecentActivityCreateNestedManyWithoutUserInput
    TeacherProfile?: TeacherCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAttendanceInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    isPremium?: boolean
    createdAt?: Date | string
    premiumExpiresAt?: Date | string | null
    branch?: string | null
    year?: number | null
    semester?: number | null
    premiumFeatures?: PremiumFeatureUncheckedCreateNestedManyWithoutUsersInput
    GoogleToken?: GoogleTokenUncheckedCreateNestedManyWithoutUserInput
    RecentActivity?: RecentActivityUncheckedCreateNestedManyWithoutUserInput
    TeacherProfile?: TeacherUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAttendanceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttendanceInput, UserUncheckedCreateWithoutAttendanceInput>
  }

  export type UserUpsertWithoutAttendanceInput = {
    update: XOR<UserUpdateWithoutAttendanceInput, UserUncheckedUpdateWithoutAttendanceInput>
    create: XOR<UserCreateWithoutAttendanceInput, UserUncheckedCreateWithoutAttendanceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAttendanceInput, UserUncheckedUpdateWithoutAttendanceInput>
  }

  export type UserUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    premiumFeatures?: PremiumFeatureUpdateManyWithoutUsersNestedInput
    GoogleToken?: GoogleTokenUpdateManyWithoutUserNestedInput
    RecentActivity?: RecentActivityUpdateManyWithoutUserNestedInput
    TeacherProfile?: TeacherUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    premiumFeatures?: PremiumFeatureUncheckedUpdateManyWithoutUsersNestedInput
    GoogleToken?: GoogleTokenUncheckedUpdateManyWithoutUserNestedInput
    RecentActivity?: RecentActivityUncheckedUpdateManyWithoutUserNestedInput
    TeacherProfile?: TeacherUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutPremiumFeaturesInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    isPremium?: boolean
    createdAt?: Date | string
    premiumExpiresAt?: Date | string | null
    branch?: string | null
    year?: number | null
    semester?: number | null
    attendance?: AttendanceCreateNestedManyWithoutStudentInput
    GoogleToken?: GoogleTokenCreateNestedManyWithoutUserInput
    RecentActivity?: RecentActivityCreateNestedManyWithoutUserInput
    TeacherProfile?: TeacherCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPremiumFeaturesInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    isPremium?: boolean
    createdAt?: Date | string
    premiumExpiresAt?: Date | string | null
    branch?: string | null
    year?: number | null
    semester?: number | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    GoogleToken?: GoogleTokenUncheckedCreateNestedManyWithoutUserInput
    RecentActivity?: RecentActivityUncheckedCreateNestedManyWithoutUserInput
    TeacherProfile?: TeacherUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPremiumFeaturesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPremiumFeaturesInput, UserUncheckedCreateWithoutPremiumFeaturesInput>
  }

  export type UserUpsertWithWhereUniqueWithoutPremiumFeaturesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutPremiumFeaturesInput, UserUncheckedUpdateWithoutPremiumFeaturesInput>
    create: XOR<UserCreateWithoutPremiumFeaturesInput, UserUncheckedCreateWithoutPremiumFeaturesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutPremiumFeaturesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutPremiumFeaturesInput, UserUncheckedUpdateWithoutPremiumFeaturesInput>
  }

  export type UserUpdateManyWithWhereWithoutPremiumFeaturesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutPremiumFeaturesInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isPremium?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    premiumExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    branch?: StringNullableFilter<"User"> | string | null
    year?: IntNullableFilter<"User"> | number | null
    semester?: IntNullableFilter<"User"> | number | null
  }

  export type UserCreateWithoutGoogleTokenInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    isPremium?: boolean
    createdAt?: Date | string
    premiumExpiresAt?: Date | string | null
    branch?: string | null
    year?: number | null
    semester?: number | null
    attendance?: AttendanceCreateNestedManyWithoutStudentInput
    premiumFeatures?: PremiumFeatureCreateNestedManyWithoutUsersInput
    RecentActivity?: RecentActivityCreateNestedManyWithoutUserInput
    TeacherProfile?: TeacherCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGoogleTokenInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    isPremium?: boolean
    createdAt?: Date | string
    premiumExpiresAt?: Date | string | null
    branch?: string | null
    year?: number | null
    semester?: number | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    premiumFeatures?: PremiumFeatureUncheckedCreateNestedManyWithoutUsersInput
    RecentActivity?: RecentActivityUncheckedCreateNestedManyWithoutUserInput
    TeacherProfile?: TeacherUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGoogleTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGoogleTokenInput, UserUncheckedCreateWithoutGoogleTokenInput>
  }

  export type UserUpsertWithoutGoogleTokenInput = {
    update: XOR<UserUpdateWithoutGoogleTokenInput, UserUncheckedUpdateWithoutGoogleTokenInput>
    create: XOR<UserCreateWithoutGoogleTokenInput, UserUncheckedCreateWithoutGoogleTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGoogleTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGoogleTokenInput, UserUncheckedUpdateWithoutGoogleTokenInput>
  }

  export type UserUpdateWithoutGoogleTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    premiumFeatures?: PremiumFeatureUpdateManyWithoutUsersNestedInput
    RecentActivity?: RecentActivityUpdateManyWithoutUserNestedInput
    TeacherProfile?: TeacherUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGoogleTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    premiumFeatures?: PremiumFeatureUncheckedUpdateManyWithoutUsersNestedInput
    RecentActivity?: RecentActivityUncheckedUpdateManyWithoutUserNestedInput
    TeacherProfile?: TeacherUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutRecentActivityInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    isPremium?: boolean
    createdAt?: Date | string
    premiumExpiresAt?: Date | string | null
    branch?: string | null
    year?: number | null
    semester?: number | null
    attendance?: AttendanceCreateNestedManyWithoutStudentInput
    premiumFeatures?: PremiumFeatureCreateNestedManyWithoutUsersInput
    GoogleToken?: GoogleTokenCreateNestedManyWithoutUserInput
    TeacherProfile?: TeacherCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRecentActivityInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    isPremium?: boolean
    createdAt?: Date | string
    premiumExpiresAt?: Date | string | null
    branch?: string | null
    year?: number | null
    semester?: number | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    premiumFeatures?: PremiumFeatureUncheckedCreateNestedManyWithoutUsersInput
    GoogleToken?: GoogleTokenUncheckedCreateNestedManyWithoutUserInput
    TeacherProfile?: TeacherUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRecentActivityInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecentActivityInput, UserUncheckedCreateWithoutRecentActivityInput>
  }

  export type UserUpsertWithoutRecentActivityInput = {
    update: XOR<UserUpdateWithoutRecentActivityInput, UserUncheckedUpdateWithoutRecentActivityInput>
    create: XOR<UserCreateWithoutRecentActivityInput, UserUncheckedCreateWithoutRecentActivityInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecentActivityInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecentActivityInput, UserUncheckedUpdateWithoutRecentActivityInput>
  }

  export type UserUpdateWithoutRecentActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    premiumFeatures?: PremiumFeatureUpdateManyWithoutUsersNestedInput
    GoogleToken?: GoogleTokenUpdateManyWithoutUserNestedInput
    TeacherProfile?: TeacherUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRecentActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    premiumFeatures?: PremiumFeatureUncheckedUpdateManyWithoutUsersNestedInput
    GoogleToken?: GoogleTokenUncheckedUpdateManyWithoutUserNestedInput
    TeacherProfile?: TeacherUncheckedUpdateOneWithoutUserNestedInput
  }

  export type SubjectCreateWithoutClassesInput = {
    id?: string
    name: string
    code?: string | null
    teacherSubjects?: TeacherSubjectCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutClassesInput = {
    id?: string
    name: string
    code?: string | null
    teacherSubjects?: TeacherSubjectUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutClassesInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutClassesInput, SubjectUncheckedCreateWithoutClassesInput>
  }

  export type TeacherCreateWithoutClassesInput = {
    id?: string
    department?: string | null
    designation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTeacherProfileInput
    subjects?: TeacherSubjectCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutClassesInput = {
    id?: string
    userId: string
    department?: string | null
    designation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: TeacherSubjectUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutClassesInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutClassesInput, TeacherUncheckedCreateWithoutClassesInput>
  }

  export type SubjectUpsertWithoutClassesInput = {
    update: XOR<SubjectUpdateWithoutClassesInput, SubjectUncheckedUpdateWithoutClassesInput>
    create: XOR<SubjectCreateWithoutClassesInput, SubjectUncheckedCreateWithoutClassesInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutClassesInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutClassesInput, SubjectUncheckedUpdateWithoutClassesInput>
  }

  export type SubjectUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    teacherSubjects?: TeacherSubjectUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    teacherSubjects?: TeacherSubjectUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type TeacherUpsertWithoutClassesInput = {
    update: XOR<TeacherUpdateWithoutClassesInput, TeacherUncheckedUpdateWithoutClassesInput>
    create: XOR<TeacherCreateWithoutClassesInput, TeacherUncheckedCreateWithoutClassesInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutClassesInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutClassesInput, TeacherUncheckedUpdateWithoutClassesInput>
  }

  export type TeacherUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTeacherProfileNestedInput
    subjects?: TeacherSubjectUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: TeacherSubjectUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type ClassSessionCreateWithoutSubjectInput = {
    id?: string
    section: string
    semester: number
    weekday: $Enums.Weekday
    room?: string | null
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.SessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: TeacherCreateNestedOneWithoutClassesInput
  }

  export type ClassSessionUncheckedCreateWithoutSubjectInput = {
    id?: string
    section: string
    semester: number
    weekday: $Enums.Weekday
    room?: string | null
    startTime: Date | string
    endTime: Date | string
    teacherId: string
    status?: $Enums.SessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassSessionCreateOrConnectWithoutSubjectInput = {
    where: ClassSessionWhereUniqueInput
    create: XOR<ClassSessionCreateWithoutSubjectInput, ClassSessionUncheckedCreateWithoutSubjectInput>
  }

  export type ClassSessionCreateManySubjectInputEnvelope = {
    data: ClassSessionCreateManySubjectInput | ClassSessionCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type TeacherSubjectCreateWithoutSubjectInput = {
    id?: string
    teacher: TeacherCreateNestedOneWithoutSubjectsInput
    semester: SemesterCreateNestedOneWithoutSubjectsInput
    section: SectionCreateNestedOneWithoutSubjectsInput
  }

  export type TeacherSubjectUncheckedCreateWithoutSubjectInput = {
    id?: string
    teacherId: string
    semesterId: string
    sectionId: string
  }

  export type TeacherSubjectCreateOrConnectWithoutSubjectInput = {
    where: TeacherSubjectWhereUniqueInput
    create: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type TeacherSubjectCreateManySubjectInputEnvelope = {
    data: TeacherSubjectCreateManySubjectInput | TeacherSubjectCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type ClassSessionUpsertWithWhereUniqueWithoutSubjectInput = {
    where: ClassSessionWhereUniqueInput
    update: XOR<ClassSessionUpdateWithoutSubjectInput, ClassSessionUncheckedUpdateWithoutSubjectInput>
    create: XOR<ClassSessionCreateWithoutSubjectInput, ClassSessionUncheckedCreateWithoutSubjectInput>
  }

  export type ClassSessionUpdateWithWhereUniqueWithoutSubjectInput = {
    where: ClassSessionWhereUniqueInput
    data: XOR<ClassSessionUpdateWithoutSubjectInput, ClassSessionUncheckedUpdateWithoutSubjectInput>
  }

  export type ClassSessionUpdateManyWithWhereWithoutSubjectInput = {
    where: ClassSessionScalarWhereInput
    data: XOR<ClassSessionUpdateManyMutationInput, ClassSessionUncheckedUpdateManyWithoutSubjectInput>
  }

  export type TeacherSubjectUpsertWithWhereUniqueWithoutSubjectInput = {
    where: TeacherSubjectWhereUniqueInput
    update: XOR<TeacherSubjectUpdateWithoutSubjectInput, TeacherSubjectUncheckedUpdateWithoutSubjectInput>
    create: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type TeacherSubjectUpdateWithWhereUniqueWithoutSubjectInput = {
    where: TeacherSubjectWhereUniqueInput
    data: XOR<TeacherSubjectUpdateWithoutSubjectInput, TeacherSubjectUncheckedUpdateWithoutSubjectInput>
  }

  export type TeacherSubjectUpdateManyWithWhereWithoutSubjectInput = {
    where: TeacherSubjectScalarWhereInput
    data: XOR<TeacherSubjectUpdateManyMutationInput, TeacherSubjectUncheckedUpdateManyWithoutSubjectInput>
  }

  export type TeacherSubjectCreateWithoutSemesterInput = {
    id?: string
    teacher: TeacherCreateNestedOneWithoutSubjectsInput
    subject: SubjectCreateNestedOneWithoutTeacherSubjectsInput
    section: SectionCreateNestedOneWithoutSubjectsInput
  }

  export type TeacherSubjectUncheckedCreateWithoutSemesterInput = {
    id?: string
    teacherId: string
    subjectId: string
    sectionId: string
  }

  export type TeacherSubjectCreateOrConnectWithoutSemesterInput = {
    where: TeacherSubjectWhereUniqueInput
    create: XOR<TeacherSubjectCreateWithoutSemesterInput, TeacherSubjectUncheckedCreateWithoutSemesterInput>
  }

  export type TeacherSubjectCreateManySemesterInputEnvelope = {
    data: TeacherSubjectCreateManySemesterInput | TeacherSubjectCreateManySemesterInput[]
    skipDuplicates?: boolean
  }

  export type TeacherSubjectUpsertWithWhereUniqueWithoutSemesterInput = {
    where: TeacherSubjectWhereUniqueInput
    update: XOR<TeacherSubjectUpdateWithoutSemesterInput, TeacherSubjectUncheckedUpdateWithoutSemesterInput>
    create: XOR<TeacherSubjectCreateWithoutSemesterInput, TeacherSubjectUncheckedCreateWithoutSemesterInput>
  }

  export type TeacherSubjectUpdateWithWhereUniqueWithoutSemesterInput = {
    where: TeacherSubjectWhereUniqueInput
    data: XOR<TeacherSubjectUpdateWithoutSemesterInput, TeacherSubjectUncheckedUpdateWithoutSemesterInput>
  }

  export type TeacherSubjectUpdateManyWithWhereWithoutSemesterInput = {
    where: TeacherSubjectScalarWhereInput
    data: XOR<TeacherSubjectUpdateManyMutationInput, TeacherSubjectUncheckedUpdateManyWithoutSemesterInput>
  }

  export type TeacherSubjectCreateWithoutSectionInput = {
    id?: string
    teacher: TeacherCreateNestedOneWithoutSubjectsInput
    subject: SubjectCreateNestedOneWithoutTeacherSubjectsInput
    semester: SemesterCreateNestedOneWithoutSubjectsInput
  }

  export type TeacherSubjectUncheckedCreateWithoutSectionInput = {
    id?: string
    teacherId: string
    subjectId: string
    semesterId: string
  }

  export type TeacherSubjectCreateOrConnectWithoutSectionInput = {
    where: TeacherSubjectWhereUniqueInput
    create: XOR<TeacherSubjectCreateWithoutSectionInput, TeacherSubjectUncheckedCreateWithoutSectionInput>
  }

  export type TeacherSubjectCreateManySectionInputEnvelope = {
    data: TeacherSubjectCreateManySectionInput | TeacherSubjectCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type TeacherSubjectUpsertWithWhereUniqueWithoutSectionInput = {
    where: TeacherSubjectWhereUniqueInput
    update: XOR<TeacherSubjectUpdateWithoutSectionInput, TeacherSubjectUncheckedUpdateWithoutSectionInput>
    create: XOR<TeacherSubjectCreateWithoutSectionInput, TeacherSubjectUncheckedCreateWithoutSectionInput>
  }

  export type TeacherSubjectUpdateWithWhereUniqueWithoutSectionInput = {
    where: TeacherSubjectWhereUniqueInput
    data: XOR<TeacherSubjectUpdateWithoutSectionInput, TeacherSubjectUncheckedUpdateWithoutSectionInput>
  }

  export type TeacherSubjectUpdateManyWithWhereWithoutSectionInput = {
    where: TeacherSubjectScalarWhereInput
    data: XOR<TeacherSubjectUpdateManyMutationInput, TeacherSubjectUncheckedUpdateManyWithoutSectionInput>
  }

  export type AttendanceCreateManyStudentInput = {
    id?: string
    subject: string
    date?: Date | string
    status: string
    markedBy: string
  }

  export type GoogleTokenCreateManyUserInput = {
    accessToken: string
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecentActivityCreateManyUserInput = {
    id?: string
    userName?: string | null
    action: string
    timestamp?: Date | string
  }

  export type AttendanceUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    markedBy?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    markedBy?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    markedBy?: StringFieldUpdateOperationsInput | string
  }

  export type PremiumFeatureUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PremiumFeatureUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PremiumFeatureUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoogleTokenUpdateWithoutUserInput = {
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoogleTokenUncheckedUpdateWithoutUserInput = {
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoogleTokenUncheckedUpdateManyWithoutUserInput = {
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecentActivityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecentActivityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecentActivityUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherSubjectCreateManyTeacherInput = {
    id?: string
    subjectId: string
    semesterId: string
    sectionId: string
  }

  export type ClassSessionCreateManyTeacherInput = {
    id?: string
    subjectId: string
    section: string
    semester: number
    weekday: $Enums.Weekday
    room?: string | null
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.SessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherSubjectUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: SubjectUpdateOneRequiredWithoutTeacherSubjectsNestedInput
    semester?: SemesterUpdateOneRequiredWithoutSubjectsNestedInput
    section?: SectionUpdateOneRequiredWithoutSubjectsNestedInput
  }

  export type TeacherSubjectUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherSubjectUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
  }

  export type ClassSessionUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    weekday?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    room?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneRequiredWithoutClassesNestedInput
  }

  export type ClassSessionUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    weekday?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    room?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassSessionUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    weekday?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    room?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutPremiumFeaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    GoogleToken?: GoogleTokenUpdateManyWithoutUserNestedInput
    RecentActivity?: RecentActivityUpdateManyWithoutUserNestedInput
    TeacherProfile?: TeacherUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPremiumFeaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    GoogleToken?: GoogleTokenUncheckedUpdateManyWithoutUserNestedInput
    RecentActivity?: RecentActivityUncheckedUpdateManyWithoutUserNestedInput
    TeacherProfile?: TeacherUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutPremiumFeaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    premiumExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    branch?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClassSessionCreateManySubjectInput = {
    id?: string
    section: string
    semester: number
    weekday: $Enums.Weekday
    room?: string | null
    startTime: Date | string
    endTime: Date | string
    teacherId: string
    status?: $Enums.SessionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherSubjectCreateManySubjectInput = {
    id?: string
    teacherId: string
    semesterId: string
    sectionId: string
  }

  export type ClassSessionUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    weekday?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    room?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: TeacherUpdateOneRequiredWithoutClassesNestedInput
  }

  export type ClassSessionUncheckedUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    weekday?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    room?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassSessionUncheckedUpdateManyWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    weekday?: EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday
    room?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherId?: StringFieldUpdateOperationsInput | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherSubjectUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacher?: TeacherUpdateOneRequiredWithoutSubjectsNestedInput
    semester?: SemesterUpdateOneRequiredWithoutSubjectsNestedInput
    section?: SectionUpdateOneRequiredWithoutSubjectsNestedInput
  }

  export type TeacherSubjectUncheckedUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherSubjectUncheckedUpdateManyWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherSubjectCreateManySemesterInput = {
    id?: string
    teacherId: string
    subjectId: string
    sectionId: string
  }

  export type TeacherSubjectUpdateWithoutSemesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacher?: TeacherUpdateOneRequiredWithoutSubjectsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutTeacherSubjectsNestedInput
    section?: SectionUpdateOneRequiredWithoutSubjectsNestedInput
  }

  export type TeacherSubjectUncheckedUpdateWithoutSemesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherSubjectUncheckedUpdateManyWithoutSemesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherSubjectCreateManySectionInput = {
    id?: string
    teacherId: string
    subjectId: string
    semesterId: string
  }

  export type TeacherSubjectUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacher?: TeacherUpdateOneRequiredWithoutSubjectsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutTeacherSubjectsNestedInput
    semester?: SemesterUpdateOneRequiredWithoutSubjectsNestedInput
  }

  export type TeacherSubjectUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherSubjectUncheckedUpdateManyWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
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