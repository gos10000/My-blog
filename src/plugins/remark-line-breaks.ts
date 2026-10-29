/**
 * 段落内换行 → <br>
 *
 * Markdown（CommonMark）的默认行为：段落里的单个换行会被当成空格，
 * 所以「一行一句」写出来的文字会连成一片。
 *
 * 这个插件把每个段落内 text 节点按 \n 拆开，并在中间插入 break 节点。
 * 只处理 text 节点，因此：
 * - 代码块（Code / <pre>）不受影响，换行本来就会保留；
 * - 标题、列表项、引用里的 text 也会生效（它们的 text 同样带 \n）；
 * - 链接、强调等内联元素内部的文字同样会按换行拆开。
 *
 * 用法见 astro.config.mjs 的 markdown.mdastPlugins。
 */

interface MdastNode {
    type: string;
    value?: string;
    children?: MdastNode[];
}

interface MdastContext {
    replaceNode(node: MdastNode, replacement: MdastNode | MdastNode[]): void;
}

export function remarkLineBreaks() {
    return {
        name: 'remark-line-breaks',

        text(node: MdastNode, ctx: MdastContext) {
            const value = node.value;
            if (typeof value !== 'string' || !value.includes('\n')) return;

            const parts = value.split('\n');
            const nodes: MdastNode[] = [];

            parts.forEach((part, index) => {
                if (index > 0) {
                    nodes.push({ type: 'break' });
                }
                if (part !== '') {
                    nodes.push({ type: 'text', value: part });
                }
            });

            // 只有换行、没有实际文字时保持原样，避免产生连续的空 <br>
            if (nodes.every((n) => n.type === 'break')) return;

            ctx.replaceNode(node, nodes);
        },
    };
}

export default remarkLineBreaks;
