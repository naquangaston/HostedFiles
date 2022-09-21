import {Octokit,App} from "https://cdn.skypack.dev/octokit";
import {Base64} from 'https://cdn.jsdelivr.net/npm/js-base64@3.7.2/base64.mjs';
import {createOrUpdateTextFile,composeCreateOrUpdateTextFile,} from "https://cdn.pika.dev/@octokit/plugin-create-or-update-text-file";
const MyOctokit = Octokit.plugin(createOrUpdateTextFile);

const octokit = new MyOctokit({
    auth: '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',
});

!(async function() {
	const {data:{login}} = await octokit.rest.users.getAuthenticated();
	let owner=login
	async function deleteF({owner,repo,path,message="no msg",sha}){
		octokit.repos.deleteFile({
		owner,
		repo,
		path,
		message,
		sha
});
	}
	async function getContentSha({owner,repo,path}){
		console.log({owner,repo,path})
		var {data:{sha}}=await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
  owner,
  repo,
  path
});return sha
	}
    async function upLoadFile(repo,content, filename, path, b64 = false, ) {
	var sha
		try{sha=await getContentSha({owner,repo,path:`${path?path+'/':""}${filename}`})}catch(e){}
        const fileOutput = b64 ? content : Base64.encode(content);
		var _d={
            owner,
            repo,
            path: `${path?path+'/':""}${filename}`,
            message: `feat: Added ${filename} programatically`,
            content: fileOutput,
            committer: {
                name: `Octokit Bot`,
                email: 'hello@dennisokeeffe.com',
            },
            author: {
                name: 'Octokit Bot',
                email: 'hello@dennisokeeffe.com',
            },
        };
		sha?_d.sha=sha:null;
        const {data} = await octokit.rest.repos.createOrUpdateFileContents(_d);
        console.log(sha?'updated':"created", filename, 'Path:', path ? path + '/' : "")
        return data
    }
	async function uoLoadFromUrl(){
		//url tampermonkey stuff
	}
    //return await upLoadFile('HostedFiles','Test hello world', '_tt.md')
})().then(e=>{
}, e => console.warn(e.message))
