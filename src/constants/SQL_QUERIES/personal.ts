const personalQueries = {
    getIssues : (): string =>{
        const query : string = `SELECT * FROM et3test.pr_issue LIMIT 20;`
        return query;
    },
}

export default personalQueries;