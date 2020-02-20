FROM mcr.microsoft.com/dotnet/core/aspnet:2.1-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.1-stretch AS build
WORKDIR /src
COPY ["plorence-kr.csproj", ""]
RUN dotnet restore "./plorence-kr.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "plorence-kr.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "plorence-kr.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "plorence-kr.dll"]