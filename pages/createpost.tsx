import Head from 'next/head'
import React, { useState } from 'react'
import Header from '../components/Header'
import { Post } from '../typings'
import { useForm, SubmitHandler } from 'react-hook-form'

interface IFormInput {
  _id: string
  createdAt: string
  title: string
  author: {
    name: string
    image: string
  }
  description: string
  mainImage: {
    asset: {
      url: string
    }
  }
  slug: {
    current: string
  }
  body: [object]
}

interface Props {
  post: Post
}

function createpost({ post }: Props) {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // fetch('/api/createComment', {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    // })
    //   .then(() => {
    //     console.log(data)
    //     setSubmitted(true)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //     setSubmitted(false)
    //   })
  }

  return (
    <div>
      <Header />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mb-10 flex max-w-2xl flex-col p-5"
      >
        <h3 className="text-sm text-yellow-500">What's on your mind?</h3>
        <h4 className="text-3xl font-bold">Create a post here!</h4>
        <hr className="mt-2 py-3"></hr>

        <input {...register('_id')} type="hidden" name="_id" />

        <label className="mb-5 block">
          <span className="text-gray-700">Title</span>
          <input
            {...register('title', { required: true })}
            className="form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring"
            placeholder="Legends Landing"
            type="text"
          ></input>
        </label>
        <label className="mb-5 block">
          <span className="text-gray-700">Description</span>
          <textarea
            {...register('description', { required: true })}
            className="form-textarea mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring"
            placeholder="What a lovely day today!"
            rows={8}
          ></textarea>
        </label>
        <label className="mb-5 block">
          <span className="text-gray-700">Slug</span>
          <input
            {...register('slug', { required: true })}
            className=" blockform-input mt-1 w-full rounded border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring"
            placeholder="legends-landing"
            type="email"
          ></input>
        </label>
        <label className="mb-5 block">
          <span className="text-gray-700">Author</span>
          <input
            {...register('author', { required: true })}
            className=" blockform-input mt-1 w-full rounded border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring"
            placeholder="John Appleseed"
            type="email"
          ></input>
        </label>
        <label className="mb-5 block">
          <span className="text-gray-700">Main Image</span>
          <textarea
            {...register('mainImage', { required: true })}
            className="form-textarea mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring"
            placeholder="A sunny picture."
            rows={8}
          ></textarea>
        </label>
        <label className="mb-5 block">
          <span className="text-gray-700">Created At</span>
          <input
            {...register('createdAt', { required: true })}
            className=" blockform-input mt-1 w-full rounded border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring"
            placeholder="Meme"
            type="email"
          ></input>
        </label>
        <label className="mb-5 block">
          <span className="text-gray-700">Body</span>
          <textarea
            {...register('body', { required: true })}
            className="form-textarea mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring"
            placeholder="Here is a funny meme I found."
            rows={8}
          ></textarea>
        </label>

        {/* errors will return when field validations fails */}
        <div className="flex flex-col p-5">
          {errors.title && (
            <span className="text-red-500">- The Title is required!</span>
          )}
          {errors.author && (
            <span className="text-red-500">- The Author is required!</span>
          )}
          {errors.description && (
            <span className="text-red-500">- The Description is required!</span>
          )}
        </div>

        <input
          className="focus:shadow-outline cursor-pointer rounded bg-yellow-500 py-2 px-4 font-bold text-white shadow hover:bg-yellow-400 focus:outline-none"
          type="submit"
        />
      </form>
    </div>
  )
}

export default createpost
