import re

# Read original template index.html again
with open(r'e:\code\protfolio\template\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the style display:none
content = content.replace('style="display:none;"', "style={{display: 'none'}}")

# Convert HTML comments to JSX comments
content = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', content, flags=re.DOTALL)

# Convert class to className
content = content.replace('class="', 'className="')

# Convert for to htmlFor
content = content.replace('for="', 'htmlFor="')

# Self-close img tags
content = re.sub(r'(<img[^>]*?)(?<!/)>', r'\1 />', content)

# Self-close br tags
content = re.sub(r'(<br[^>]*?)(?<!/)>', r'\1 />', content)

# Self-close input tags
content = re.sub(r'(<input[^>]*?)(?<!/)>', r'\1 />', content)

# Self-close hr tags
content = re.sub(r'(<hr[^>]*?)(?<!/)>', r'\1 />', content)

# Extract body
match = re.search(r'<body[^>]*>(.*?)</body>', content, re.DOTALL)
if match:
    body_content = match.group(1)
    
    # Remove the script tags from body
    body_content = re.sub(r'{/\* ==== ALL MAJOR JAVASCRIPT CDNS STARTS ==== \*/}.*', '', body_content, flags=re.DOTALL)

    react_code = f"""import React, {{ useEffect }} from 'react';

function App() {{
  return (
    <>
      {body_content}
    </>
  );
}}

export default App;
"""
    with open(r'e:\code\protfolio\react-portfolio\src\App.tsx', 'w', encoding='utf-8') as out:
        out.write(react_code)
