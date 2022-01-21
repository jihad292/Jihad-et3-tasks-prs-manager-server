const personalQueries = {
    getIssues : (): string =>{
        return `select * from et3test.pr_issue`;
    },
}

export default personalQueries;