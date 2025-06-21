import React from 'react'

const BlogidPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Taxing Laughter: The Joke Tax Chronicles
              </h1>

              <p className="text-gray-600 mb-8">Posted on August 24, 2023</p>

              <div className="space-y-6 text-gray-800 leading-relaxed">
                <p>
                  Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his
                  throne. One day, his advisors came to him with a problem: the kingdom was running out of money.
                </p>

                <p>
                  Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the
                  place: under the king's pillow, in his soup, even in the royal toilet. The king was furious, but he
                  couldn't seem to stop Jokester.
                </p>

                <p>
                  And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny
                  that they couldn't help but laugh. And once they started laughing, they couldn't stop.
                </p>
              </div>
            </article>
          </div>

          {/* Author Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Author</h3>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
                  {/* <Image

                    src="/placeholder.svg?height=64&width=64"
                    alt="Author avatar"
                    width={64}
                    height={64}
                    className="rounded-full"
                  /> */}
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-2">Jokester</h4>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Master of mirth, purveyor of puns, and the funniest person in the kingdom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogidPage