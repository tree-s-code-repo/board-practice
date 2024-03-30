
<h1>Create a simple board project with nest</h1>
Technology Stack : Next.js , Postgres, PgAdmin

## Technical Goals
- Implement a simple bulletin board CRUD using Nest.js.
- Connect to a DB.
- Deploy it, not just run it locally.
- Launch Docker. 
- Build CI/CD.

## Personal Goals
- To have fun working on projects after work to find personal development fun. 
- To document my troubleshooting process and learnings to grow technically.


# Connect Postgres DB 
**isntall**

```jsx
brew install postgresql
```

**Start the service**

```bash
brew services start postgresql
```

**connect psql**

```bash
psql postgres
```

# Pg Admin Issue

Issue of not being able to create DB itself

At first, I couldn't guess at all, and after searching, I realized that it was a permission issue.

# **Search Keyword**

- pgadmin create database not found
- could not create the role pgadmin
- how to setting role of pgadmin
- why can't create database pgadmin

# Links to blogs that helped you resolve my issue

**[[Mac] 맥 Postgresql 로컬 환경 구축하기](https://puleugo.tistory.com/98)**

## Handing over permissions with commands

```jsx
ALTER ROLE {userName} CREATEDB;
```

# Code For Connet DB

```jsx
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: 5432,
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_DATABASE'),
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        synchronize: true,
      }),
    }),
    BoardsModule,
  ],
})
```

# Lessons learned (technical)

- Myth: Relational DBs have huge permissions issues (especially relational DBs).
- it's pretty annoying to configure with Nest.
- I thought process.env would work right away, but it snapped something undefined...

# lesson learned (mindset)

- There's no problem that can't be solved, even if it takes time.


# **Pat yourself on the back**.

- Connecting to a relational DB was trickier than I thought it would be, but I didn't compromise with myself and stuck with it.
- Listing the problems one by one.

