// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const Post = defineDocumentType(() => ({
    name: 'Post',

    filePathPattern: `**/*.md`,

    fields: {
        date: { type: 'date', required: true },
        title: { type: 'string', required: true },
        image: { type: 'string', required: true },
        description: { type: 'string', required: true },
    },

    computedFields: {
        slug: {
            type: 'string',
            resolve: (doc) => doc._raw.sourceFileName.replace('.md', ''),
        }
    },
}))

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })