import Editor, { useMonaco } from '@monaco-editor/react'
import { useEffect } from 'react';

const CodeEditor = () => {
	const monaco = useMonaco();

	useEffect(()=>{
		if (!monaco) return;

		monaco.editor.setTheme("vs-dark");

		monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
			allowComments: true,
		  });
	});

	return (
		<div className='code-editor'>
			<Editor height='100%' width='100%' language='json'
			options={
				{
					fontFamily: "unifont",
					fontSize: 16,
					minimap: { enabled: false },
					scrollbar: {
					  vertical: 'auto',
					  horizontal: 'auto'
					},
				}
			}/>
		</div>
	)
}

export default CodeEditor;
