const e=JSON.parse('{"key":"v-0db1700e","path":"/posts/%E7%AE%97%E6%B3%95/%E4%BC%98%E5%8C%96%E5%8A%A8%E6%80%81%E5%88%A0%E9%99%A4%E9%9B%86%E5%90%88%E4%B8%AD%E7%9A%84%E5%85%83%E7%B4%A0/","title":"优化动态删除集合中的元素","lang":"zh-CN","frontmatter":{"title":"优化动态删除集合中的元素","date":"2022-01-13T17:04:47.000Z","category":["算法"],"description":"如何删除一个集合中满足条件的所有元素？ 这是一个很常见的问题，解决方式也五花八门。 常用的思路一般是找出所有集合中所有满足条件的集合存起来，再遍历这个集合删除其中的元素这种方式虽然简单，但有两个缺点 1. 会额外增加GC，因为new了一个新的集合 2. 会增加额外的遍历次数（第二次集合的遍历） 还见过另外一种思路，foreach中remove之后递归这...","head":[["meta",{"property":"og:url","content":"https://alanweekend.github.io/posts/%E7%AE%97%E6%B3%95/%E4%BC%98%E5%8C%96%E5%8A%A8%E6%80%81%E5%88%A0%E9%99%A4%E9%9B%86%E5%90%88%E4%B8%AD%E7%9A%84%E5%85%83%E7%B4%A0/"}],["meta",{"property":"og:site_name","content":"Gaming & Coding"}],["meta",{"property":"og:title","content":"优化动态删除集合中的元素"}],["meta",{"property":"og:description","content":"如何删除一个集合中满足条件的所有元素？ 这是一个很常见的问题，解决方式也五花八门。 常用的思路一般是找出所有集合中所有满足条件的集合存起来，再遍历这个集合删除其中的元素这种方式虽然简单，但有两个缺点 1. 会额外增加GC，因为new了一个新的集合 2. 会增加额外的遍历次数（第二次集合的遍历） 还见过另外一种思路，foreach中remove之后递归这..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-30T13:15:32.000Z"}],["meta",{"property":"article:author","content":"Weekend"}],["meta",{"property":"article:published_time","content":"2022-01-13T17:04:47.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-30T13:15:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"优化动态删除集合中的元素\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-13T17:04:47.000Z\\",\\"dateModified\\":\\"2023-05-30T13:15:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Weekend\\",\\"url\\":\\"https://alanweekend.github.io/\\"}]}"]]},"headers":[{"level":3,"title":"如何删除一个集合中满足条件的所有元素？","slug":"如何删除一个集合中满足条件的所有元素","link":"#如何删除一个集合中满足条件的所有元素","children":[]},{"level":3,"title":"优化,不产生新的GC也不会额外遍历","slug":"优化-不产生新的gc也不会额外遍历","link":"#优化-不产生新的gc也不会额外遍历","children":[]}],"git":{"createdTime":1685430052000,"updatedTime":1685452532000,"contributors":[{"name":"Weekend","email":"872285171@qq.com","commits":2}]},"readingTime":{"minutes":1.85,"words":556},"filePathRelative":"posts/算法/优化动态删除集合中的元素/index.md","localizedDate":"2022年1月13日","excerpt":"","copyright":{"author":"Weekend","license":"MIT"},"autoDesc":true}');export{e as data};
