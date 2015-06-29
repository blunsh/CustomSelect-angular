# CustomSelect-angular

<p>Built-in select element is hard to style. So you can replace it with custom structure. This one provides correct behavior of ng-model property.</p>

<h3>Usage</h3>
<div class="highlight highlight-html">
<pre><code>
	<custom-select 
        ng-model="myFruit" 
        options="fruits" 
        default="apple" 
        placeholder="Select Yammy Fruit" 
        name="fruitName"
      ></custom-select>
</code></pre> </div>     
<p>Create fruits object in the controller. Properties <code>default</code> and <code>placeholder</code> are optional.
And you will get in your html:</p>
<div class="highlight highlight-html"><pre><code>
<custom-select>
  <p>
    <span>Яблоко</span>
    <span class="triangle-down"></span>
  </p>
  <div class="options">
    <ul>
      <li>Яблоко</li>
      ...
    </ul>
  </div>
  <input type="hidden">
</custom-select></code>
</pre>
</div>
